import {useEffect,useState} from 'react'
import "./App.css"

function UseEffect() {
  const [s, setS] = useState(true);
  const [title, settitle]= useState("")
  const [count, setcount]= useState(0)
 useEffect(()=>{ 
  document.title =`title= ${title}`
 },[s])


  return (
    <>
    <center>
      <h1>useEffect</h1>
    <input type="text" onChange={e=> 
      settitle(e.target.value)
    } /><br />
    <button onClick={() => setS(prevS => !prevS)}>Set title</button>
    <button style={{background:"green",color:"white"}} onClick={()=>{setcount(count+1)
    }}>count {count}</button>
    </center>
    <hr />
    <hr />    </>
  )
}

export default UseEffect