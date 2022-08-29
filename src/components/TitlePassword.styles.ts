import styled from 'styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const CopyPasswordContainer =styled.div`
margin-top:10px;
width:350px;
height:40px;
background-color:#33334d;
display:flex;
justify-content:space-between;
align-content:center;
` ;

export const TextPassword =styled.p`
color:white;
opacity:0.3;
font-size:15px;
margin: 10px;
` ;

export const ContentCopy =styled(ContentCopyIcon)`
color:#40ff00;
width:10px;
height:15px;
 margin:15px 10px;
 cursor:pointer;
` ;
