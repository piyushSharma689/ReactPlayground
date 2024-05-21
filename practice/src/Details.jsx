import { useState, useEffect } from "react";
import Card from "./Card";

function Details() {
  const [user, setuser] = useState({ name: "", mob:"", add: "" });
  const [s, sets] = useState(true);
  const [value, setvalue] = useState({ name: "", mob:"", add: "" });
  const [infoArr, setinfoArr] = useState([]);

  useEffect(() => {
    setuser({ ...user, name: value.name, mob: value.mob, add: value.add });
    setvalue({ name: "", mob: "", add: "" });
  }, [s]);

  useEffect(() => {
    if (user.name !== "" && user.mob !== 0 && user.add !== "") {
      setinfoArr([...infoArr, user]);
    }
  }, [user]);

  const removeItem = (index) => {
    const newArr = [...infoArr]; // Create a copy of the existing array
    newArr.splice(index, 1); // Remove one element at the specified index
    setinfoArr(newArr); // Update the state with the modified array
  };


  const handlekey= (e)=>{
    if(e.key=="Enter"){
        sets(!s);
    }
  }

  return (
    <><center>
      <input
        value={value.name}
        type="text"
        onChange={(e) => setvalue({ ...value, name: e.target.value })}
        onKeyDown={handlekey}
        placeholder="Name"
      />
      <input
      value={value.mob}
        type="number" 
        onChange={(e) => setvalue({ ...value, mob: e.target.value })}
        onKeyDown={handlekey}
        placeholder="Phone no."
      />
      <input
      value={value.add}
        type="text"
        onChange={(e) => setvalue({ ...value, add: e.target.value })}
        onKeyDown={handlekey}
        placeholder="Address"
      /> <br />
      <button onClick={() => sets(!s)}>Submit</button>
      </center>
      <div className="container">
        {infoArr.map((item, index) => {
          return (
            <Card key={index} name={item.name} mob={item.mob} add={item.add} remove={() => removeItem(index)} />
          );
        })}
      </div>
    </>
  );
}

export default Details;
