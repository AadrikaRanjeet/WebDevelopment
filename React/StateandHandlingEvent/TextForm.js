
import React,{useState} from 'react'

export default function TextForm(props) {
 const handleClickUp =()=>{
  console.log("Uppercase was clicked");
  let newText=text.toUpperCase();
  setText(newText);
 }
 const handleOnChange =(event)=>{
  console.log("Uppercase was clicked");
  setText(event.target.value);
 }
 const [text,setText]=useState('Enter text here')
  //text="New Text"wrong way to change the text
  // setText("new Text");//correct way to change the text
  return (
    <div>
      <form>
        <h1>{props.heading} </h1>
       <div className="mb-3">
      <textarea className="form-control" id="myBox"value={text} onChange={handleOnChange} cols="30" rows="10"></textarea>
    </div>
  </form>
  <button className="btn btn-primary" onClick={handleClickUp}>Change To UpperCase</button>
    </div>
   
  )
}
