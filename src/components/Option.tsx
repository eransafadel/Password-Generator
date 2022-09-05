import React from 'react';
import  "./Option.css";

interface Props {
  text: string;  
  val: boolean;
  handleChange: ()=>void;
}

const Option:React.FC<Props> = ({text,val,handleChange}) => {

    return <div>
     
    <label className="container">{text}
    <input type="checkbox"  onChange={handleChange}/>
    <span className="checkmark"/>
  </label>
  </div>

}

export default Option;