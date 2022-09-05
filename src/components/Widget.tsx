import React,{useState} from 'react';
import {Container,Text,TextNumber,Slider,ContainerText} from "./Widget.styles";

interface Props {
  value:number;
  setValue:React.Dispatch<React.SetStateAction<number>>;
}


const Widget:React.FC<Props> = ({value,setValue}) => {

    
  return (
    <Container>
        <ContainerText>
        <Text>Character Length</Text>
        <TextNumber>{Math.floor(value/5)}</TextNumber>
        </ContainerText>
        <Slider  value={value}  onChange={  e =>setValue(+(e.target.value))} />
    </Container>    
  )
}

export default Widget;