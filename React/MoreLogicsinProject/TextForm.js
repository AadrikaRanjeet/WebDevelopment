
import React,{useState} from 'react'

export default function TextForm(props) {
 const handleClickUp =()=>{
  console.log("Uppercase was clicked");
  let newText=text.toUpperCase();
  setText(newText);
 }
 const handleClickUp2 =()=>{
  console.log("Uppercase was clicked");
  let newText=text.toLowerCase();
  setText(newText);
 }
 const handleOnChange =(event)=>{
  console.log("Uppercase was clicked");
  setText(event.target.value);
 }
 const [text,setText]=useState('Enter text here')
 const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  //text="New Text"wrong way to change the text
  // setText("new Text");//correct way to change the text
  return (
    <>
     <div className='container'>
      <form>
        <h1>{props.heading} </h1>
       <div className="mb-3">
      <textarea className="form-control" id="myBox"value={text} onChange={handleOnChange} cols="30" rows="10"></textarea>
    </div>
  </form>
  <button className="btn btn-primary" onClick={handleClickUp}>Change To UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClickUp2}>Change To lowerCase</button>
    </div>
    <div className="container my-4">
      <h1>Your text summary</h1>
      <p className='my-2'>{text.split(" ").length} words , {text.length} characters</p>
      <p> {text.split(" ").length*0.008} Minutes read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
   
   
  )
}
