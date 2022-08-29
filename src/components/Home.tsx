import React from 'react';
import {Container,Text} from "./Home.styles";
import TitlePassword from './TitlePassword';





const Home = () => {
  return (
    <Container>
        <Text>Password Generator</Text>
        <TitlePassword/>
        
       
    </Container>
  )
}

export default Home;