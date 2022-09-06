import React, { useState } from "react";
import { Container } from "./OptionBox.styles";
import Widget from "./Widget";
import Option from "./Option";
import Progress from "./Progress";
import { Conditions,lowerCaseLetters,numbersCase,specialCharacters,upperCaseLetters } from "./macros";
import {OptionsPassword} from "../OptionsPassword";
import  Button  from "./Button";


const OptionsBox = () => {

  const [password,setPassword] = useState<OptionsPassword>(new OptionsPassword(false,false,false,false));
 const [value,setValue]=useState<number>(2);
 const [generatePassword,setGeneratePassword]=useState<string>("");

 

  const handleChangeUpperCase = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };
  const handleChangeLowerCase = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };
 

  const handleChangeNumbers = () => {
    setPassword({
      ...password,
      numbers: !password.numbers,
    });
  };

 
  const handleChangeSymbols = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  };

  const listHandleFunc = [handleChangeUpperCase,handleChangeLowerCase,handleChangeNumbers,handleChangeSymbols];


  const createPassword = (characterList:string) => {
    let password = '';
    const characterListLength = characterList.length;

    for (let i = 0; i <value; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  }




  const checkConditions = () =>{
    let characterList='';
    const{uppercase,lowercase,numbers,symbols}=password;
    if (lowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (uppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (numbers) {
      characterList = characterList + numbersCase;
    }

    if (symbols) {
      characterList = characterList + specialCharacters;
    }
    
    setGeneratePassword(createPassword(characterList));
  }

 

  return (
    <Container>
      <Widget value={value} setValue={setValue}/>
     
      {Conditions.map((elem, index: number) => (
        <Option key={index} text={elem.name} val={elem.flag} handleChange={listHandleFunc[index]} />
      ))}

      <Progress data={password}/>
     <Button/>
    </Container>
  );
};

export default OptionsBox;
