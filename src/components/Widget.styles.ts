import styled from 'styled-components';

export const Container =styled.div`




` ;

export const ContainerText =styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
align-content:center;
font-weight: bold;
`


export const Text =styled.p`
color:white;
letter-spacing:0.5px;
font-size:12px;
margin:15px;

` ;

export const TextNumber =styled(Text)`
color: #66ff66;
font-size:18px;
margin:10px 15px;
opacity:0.8;
` ;

export const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  margin:10px 15px;
  width:90%;
 
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right,#ff4d4d 0%,  #1aff1a ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    cursor:pointer;
    background-image: radial-gradient(circle, #f7f7fc 40%,   #ff9933 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

