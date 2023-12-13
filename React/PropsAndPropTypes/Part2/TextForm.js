
import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText]=useState('Enter text here');
 
  //text="New Text"wrong way to change the text
  // setText("new Text");//correct way to change the text
  return (
    <div>
      <form>
        <h1>{props.heading} </h1>
       <div className="mb-3">
      <textarea className="form-control" id="myBox"value={text} cols="30" rows="10"></textarea>
    </div>
  </form>
  <button className="btn btn-primary" >Change To UpperCase</button>
    </div>
   
  )
}
