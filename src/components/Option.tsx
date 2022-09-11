import React from 'react';
import  "./Option.css";

interface Props {
  text: string;  
  title: string;
  handleChange: (name:string,flag:boolean)=>void ;
}

const Option:React.FC<Props> = ({text,title,handleChange}) => {

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
    
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


