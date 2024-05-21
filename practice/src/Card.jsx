import React from 'react'
import "./App.css"

function Card(props) {
  return (
   <>
   <div className="card">
   
        Name: {props.name} <br /><br />
        Phone: {props.mob} <br /><br />
        Address: {props.add} <br />
        <h3 style={{margin:"0 2rem", cursor:"pointer"}} onClick={props.remove}>&#x2716;</h3>
   </div>
   </>
  )
}

export default Card