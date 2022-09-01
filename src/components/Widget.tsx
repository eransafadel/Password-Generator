import React,{useState} from 'react';
import {Container,Text,TextNumber,Slider,ContainerText} from "./Widget.styles";

const Widget = () => {

    const [value, setValue] = useState<number>(8);
  

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