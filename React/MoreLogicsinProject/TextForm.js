
import React,{useState} from 'react'

export default function TextForm(props) {

  
 const [text,setText]=useState('Enter text here')
// const [textColor,setTextColor]=useState('#000000')


 const handleClickUp =()=>{
  console.log("Uppercase was clicked");
  let newText=text.toUpperCase();
  setText(newText);
  // setTextColor('#ff007c');
 }
 const handleClickUp2 =()=>{
  console.log("Uppercase was clicked");
  let newText=text.toLowerCase();
  setText(newText);
  // setTextColor('#00fbff ');
 }
//  const Hovering =(e)=>
//  {
//   e.target.style.background='red';
//  }
 const ClearText =()=>
 {
   console.log("Text cleared");
   setText("");
 }
 const CopyText =()=>
 {
   console.log("Text cleared");
   navigator.clipboard.writeText(text);
 }
 const handleOnChange =(event)=>{
  console.log("Uppercase was clicked");
  setText(event.target.value);
  // setTextColor('#000000');
 }
 
  //text="New Text"wrong way to change the text
  // setText("new Text");//correct way to change the text
  return (
    <>
     <div className='container'style={{backgroundColor:props.mode==='light'?'white':'#003267'}}>
      <form>
        <h1 style={{color:props.mode==='light'?'#003267':'white'}}>{props.heading} </h1>
       <div className="mb-3">
      <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#003267',color:props.mode==='light'?'#003267':'white'}} id="myBox"value={text} onChange={handleOnChange} cols="30" rows="10" ></textarea>
    </div>
  </form>
  <button className="btn btn-primary" onClick={handleClickUp}>Change To UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClickUp2}>Change To lowerCase</button>
  <button className="btn btn-primary mx-2" onClick={ClearText}>Clear</button>
  <button className="btn btn-primary mx-2"  onClick={CopyText}>Copy to Clipboard</button>
    </div>
    <div className="container"style={{backgroundColor:props.mode==='light'?'white':'#003267',color:props.mode==='light'?'#003267':'white'}}>
      <h1>Your text summary</h1>
      <p className='my-2'>{text.split(" ").length} words , {text.length} characters </p>
      <p> {text.split(" ").length*0.008} Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Write something on the above textbox to preview here"}</p>
    </div>
    </>
   
   
  )
}
