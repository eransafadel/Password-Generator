import React from "react";
import { Container, Text, Rect, ContainerRect } from "./Progress.styles";
import { OptionsPassword } from "../OptionsPassword";
interface Props {
  data: OptionsPassword;
}

const Progress: React.FC<Props> = ({ data }) => {
  let count = 0;
  const { uppercase, lowercase, numbers, symbols } = data;
  for (const value of Object.values(data)) {
    value && count++;
  }
  let bgcolorRect = "red";
  if (count === 2 || count === 3) bgcolorRect = "yellow";
  else if (count === 4) bgcolorRect = "green";

  const arrData = Object.values(data);

  

  return (
    <Container>
      <Text>STRENGTH</Text>
      <ContainerRect>
       {arrData.map((elem,index)=>
       {
        return elem? <Rect style={{backgroundColor:`${bgcolorRect}`, borderColor:`${bgcolorRect}`}}/>:<Rect/>
       }
       
       )}

      
      </ContainerRect>
    </Container>
  );
};

export default Progress;
