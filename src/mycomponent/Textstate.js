import React,{state, useState} from "react";

export default function Textstate(props) {
  const [text ,setText]=useState("")
  const handleUpClick=()=>{
  // console.log("uppercase is clicked");
  let newText=text.toUpperCase();
  setText(newText)
  }
  const handleonchange=(event)=>{
    // console.log("onchange")
    setText(event.target.value)
  }
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'#050110'}}>
  <h1>enter text here</h1>
    <div className="mb-3">
     
        
    
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#050110':'white',color:props.mode==='dark'?'white':'#050110'}} 
      ></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>convertupperCase</button>
    

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#050110'}}>
      <h1>text summary</h1>
      <p> {text.split(" ").length} words  {text.length} characters</p>
      
    </div>
    </>
  );
}
