import React from 'react';
import  "./Option.css";

interface Props {
  text: string;  
  title: string;
  handleChange: (name:string,action:boolean)=>void ;
}

const Option:React.FC<Props> = ({text,title,handleChange}) => {

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    
    handleChange(e.target.name,e.target.checked);
  }
    return <div>
     
    <label className="container">{text}
    <input type="checkbox" name={title}  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>changeHandler(e)}/>
    <span className="checkmark"/>
  </label>
  </div>

}

export default Option;


