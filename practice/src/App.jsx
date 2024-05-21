import ArrayState from "./Array";

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





function App(){
   return(<>
   <ArrayState></ArrayState>
   </>);
}


export default App