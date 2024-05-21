import { useState } from "react";
import "./App.css"
// function App(){

//   const [person, setperson] = useState({name:"null",class:"null",roll:"null"});
//   const [toggle, settoggle] = useState(false);

//   return ( 
//     <>
//     <h1 onclick={()=>{
//       toggle?(settoggle(false),setperson({...person,name:"piyush",class:"csaiml",roll:41})):(settoggle(true),setperson({...person,name:"copied", class:"aiml",roll:61}))
//     }}>
//       <input type="text" onChange={e=> setperson({...person,name:(e.target.value)})} placeholder="Name"/> <br />
//       <input type="text" onChange={e=> setperson({...person,class:(e.target.value)})} placeholder="Class"/><br />
//       <input type="text" onChange={e=> setperson({...person, roll:(e.target.value)})} placeholder="RollNo" /><br />
//       <br />
//       <h1>Name: {person.name}</h1>
//       <h1>Class: {person.class}</h1>
//       <h1>rollNo.: {person.roll}</h1>
//     </h1>
// </>
//   );
// }
//------------ARRAY STATE--------------------
// 1. Create state that stores an array with the initial value of `["A","B","C"]`
// 2. Add the ability to remove the first element from the array
// 3. Add the ability to remove a specific letter form the array
// 4. Add the abiltiy to add a new element to the start of the array
// 5. Add the ability to add new element to the end of the array
// 6. Add the ability to clear the array 
// 7. Add the ability to reset the arrray to the initial value

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
<hr />
<h1>ARRAY STATE PRACTICE</h1>
<p>Added on github</p>
  <input type="text" value={value} onKeyDown={handleKey} onChange={e=>{
    setvalue(e.target.value);
  }}/>
 
  <br />
  <button onClick={Addstart}>AddStart</button>
  <button onClick={AddElement}>push</button>
  <button onClick={PopElement}>Pop</button>
  <button onClick={PopFirst}>PopFirst</button>
  <button onClick={ClearArr}>clear</button>
  <button onClick={RemoveElement}>remove</button>

  <h1>{"Array = ["+arr.join(", ")+"]"}</h1></center>
  <hr />
  <hr />
  </>);
}