import React from 'react';
import {Container,Text} from "./Home.styles";
import OptionsBox from './OptionsBox';
import TitlePassword from './TitlePassword';





const Home = () => {
  return (
    <Container>
        <Text>Password Generator</Text>
        <TitlePassword/>
        <OptionsBox/>
        
       
    </Container>
  )
}

export default Home;