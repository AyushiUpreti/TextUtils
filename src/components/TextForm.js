import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("new line");

  const handleUPClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to UpperCase", "success");
  }

  const handleLCClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to LowerCase", "success");
  }

  const handleClearClick = ()=>{
    let newText="";
    setText(newText);
    
  }

  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    // alert("copied");
    // console.log("copied");
    // setText(newText);
    props.showAlert("Text has been copied", "success");
    
  }
  const handleonchange = (event)=>{
    console.log("on change");
    setText(event.target.value); 
  }

  
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black" }} >
       <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control my-4" value={text} style={{backgroundColor:props.mode==="dark"?"#282c34":"white", color:props.mode==="dark"? "white":"black"}} onChange={handleonchange} id="myBox"  rows="6"></textarea>
        </div>

          <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleUPClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-3' onClick={handleLCClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-3' onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className='btn btn-primary mx-3' onClick={handleCopyClick}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your Text Summary</h1>
      <p>{text.length>0?text.trim().split(/\s+/).length:0} words and {text.length} characters</p>
    </div>

    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <p> {text.length>0?text.trim().split(". ").length:0} number of sentences</p>
    </div>
  
  </>
  )
}
