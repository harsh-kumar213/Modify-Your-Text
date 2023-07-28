import React,{useState} from 'react'


export default function Textform(props) {

   const buttonOnClick1=()=>{
      //  console.log("Uppercase button was clicked");
         let a = text.toUpperCase();
        setText(a);
        if(text!==''){
        props.showAlert('text has been converted in uppercase','success');
        }
    }
    const buttonOnClick2=()=>{
      //  console.log("Lowercase button was clicked");
         let a = text.toLowerCase();
        setText(a);
        if(text!==''){
        props.showAlert('text has been converted in lowercase','success');
        }
    }
    const buttonOnClick3=()=>{
    
        setText("");
    }


   
    const textOnChange=(event)=>{
        
        setText(event.target.value)
    }


    const[text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color:(props.mode==='dark')?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className = "mb-3">
           <textarea className = "form-control area" onChange={textOnChange} value={text} id="mybox" rows="8" style ={{backgroundColor: (props.mode==='dark')?'#13466e':'white',color:(props.mode==='dark')?'white':'black'}}></textarea>
            
        </div>
        <button className="btn btn-primary" onClick={buttonOnClick1}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={buttonOnClick2}>Convert to Lowerase</button>
        <button className="btn btn-primary mx-2" onClick={buttonOnClick3}>Clear text</button>
    
    </div>
     <div className="container my-3" style={{color:(props.mode==='dark')?'white':'black'}}>
       <h1>Your text summary</h1>
       <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length}Minutes needed to read</p>
       <h2>Preview</h2>
       <p>{(text==='')?'Enter your text to be previewed here':text}</p>
     </div>
    </>
  )
}
