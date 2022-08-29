import React from 'react';
import {CopyPasswordContainer,TextPassword,ContentCopy} from "./TitlePassword.styles";
const TitlePassword = () => {
  return (
    <CopyPasswordContainer>
   
        <TextPassword>P4$5W0rD!</TextPassword>
        <ContentCopy style={{width:"20px",height:"15px"}}></ContentCopy>
        </CopyPasswordContainer>
  )
}

export default TitlePassword