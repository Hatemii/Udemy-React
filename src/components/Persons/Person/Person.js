import React from "react"
import styled from "styled-components"
import "./Person.css"


const StyleDiv = styled.div`
  width:60%;
  margin:15px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  "@media (min-width: 500px)":{
    width: "450px"
  }`


const Person = (props) =>{

  return(
    <StyleDiv>
      <h2>I am {props.name} and i am {props.age} years old</h2>
      <h2>{props.children}</h2>
      <input type="text" onChange={props.changed} value={props.name} />
      <button type="button" onClick={props.click}>Remove</button>
    </StyleDiv>
  )
}

export default Person
