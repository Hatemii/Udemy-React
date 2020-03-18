import React from "react"

const Person = (props) =>{
  return(
    <div>
      <h2>I am {props.name} and i am {props.age} years old</h2>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Person
