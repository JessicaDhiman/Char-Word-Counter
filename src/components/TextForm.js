import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
  }
  const handleLowClick = () =>{
    console.log("Lowercase was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared !", "success");
  }
  const handleRevClick = () =>{
    let splitWord = text.split("");
    let reverseWord = splitWord.reverse("");
    let joinedWord = reverseWord.join("");
    let newText = joinedWord;
    setText(newText);
    props.showAlert("Text Reversed !", "success");
  }
  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard !", "success");
  }
  //Used in order to type inside the textarea
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  //State helps us to change the state of a var, obj etc. and renders it differently
  const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(14, 57, 90)':'white' , color:props.mode==='dark'?'white':'black' }} id="myBox" rows="12"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-info my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-info mx-3 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-info my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-info mx-3 my-1" onClick={handleRevClick}>Reverse the text</button>
        <button disabled={text.length===0} className="btn btn-info my-1" onClick={handleCopy}>Copy text</button>

    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
