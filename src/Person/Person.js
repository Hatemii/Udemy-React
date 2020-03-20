import React from "react"
import "./Person.css"

const Person = (props) =>{
  return(
    <div className="Person">
      <h2>I am {props.name} and i am {props.age} years old</h2>
      <h2>{props.children}</h2>
      <input type="text" onChange={props.changed} value={props.name} />
      {/* value={props.name} will show current name (old name) before we change
        ... if we do not use value={props.name} the textfield will be blank
      */}
      <button type="button" onClick={props.click}>Remove</button>
    </div>
  )
}

export default Person
