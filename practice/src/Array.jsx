import { useState } from "react";
import "./App.css"


export default function ArrayState(){
    const [arr, setarr]= useState([""]);
   const [value, setvalue]=useState("");
 
  const AddElement =()=>{
    arr.push(value);
    setarr([...arr]);
    setvalue("");   
  }
  const PopElement=()=>{
    arr.pop();
    setarr([...arr]);
  }
  const Addstart=()=>{
    arr.unshift(value)
    setarr([...arr])
    setvalue("")
  }
  const ClearArr=()=>{
      setarr([])
  }
  const RemoveElement=()=>{
    
    setarr(arr.filter(item=> item !== value));
    setvalue('');
  }

  const PopFirst=()=>{
    arr.shift();
    setarr([...arr  ])
  }

  const handleKey=(e)=>{
    if(e.key ==="Enter"){
      AddElement();
    }
  }

return(<>
<center>
<h1>ARRAY STATE PRACTICE</h1>
<p>Added on github</p>
<hr />
  <input type="text" value={value} onKeyDown={handleKey} onChange={e=>{
    setvalue(e.target.value);
  }}/>
  <hr />
  <br />
  <button onClick={Addstart}>AddStart</button>
  <button onClick={AddElement}>push</button>
  <button onClick={PopElement}>Pop</button>
  <button onClick={PopFirst}>PopFirst</button>
  <button onClick={ClearArr}>clear</button>
  <button onClick={RemoveElement}>remove</button>

  <h1>{"Array = ["+arr.join(", ")+"]"}</h1></center>
  </>);
}