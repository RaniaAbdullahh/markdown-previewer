import './App.css';
import axios from 'axios';

import React, {useState} from 'react';
import {marked} from 'marked';
import useLocalStorage from './useLocalStorage';
import Docs from './Components/Docs';

const App = () => {

  const [code, setCode] = useLocalStorage('markdownContent', '## Hello'); 
  const [compiled, setCompiled] = useState(marked(code))
  
  const [show, setShow] = useState("MD")
 
  const handleChange = (e) => {
    const newValue = e.target.value;
    setCode(newValue);
    setCompiled(marked(newValue));
  }


const controller= (e)=>{
  const newVal = e.target.value
  setShow(newVal)
 
}
const viewer=()=>{

    if (show ==="MD"){
     
      return(
        <div>
        <textarea onChange={handleChange} value={code}/>
      </div>
      )
    }else if (show ==="PRE"){
      return(
        <div>
        <textarea value={compiled}/>
      </div>

      )
    }else{
      return (
        <Docs/>
      )

    }

  }


  
  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button  value="MD" onClick={(e)=>controller(e)} className="btn" >MarkDown</button>
          <button value="DOCS" onClick={(e)=>controller(e)} className="btn">Docs</button>
          <button value="PRE" onClick={(e)=>controller(e)} >Preview</button>
         

        </div>
       
        {viewer()}
      </div>
    </>
  )
}


export default App;
