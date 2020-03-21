import React, { useState } from 'react';
import Person from "./Person/Person"
import styled from "styled-components"
import "./App.css"


const StyledButton = styled.button`
  background-color: ${props => props.alt ? "red" : "green"};
  color: white;
  font: inherit;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? "salmon" : "lightgreen"};
    color: black;
  }`

class Example extends React.Component {
  state = {
    persons:[
      {id:1, name:"Max",age:12},
      {id:2, name:"Larry",age:32},
      {id:3, name:"George",age:30}
    ],
    otherState: "some other value",
    showPersons: false
  }

  handleOnChangeMethod = (event, id) => {
    const personIndex =  this.state.persons.findIndex(p =>{
      return p.id === id
    })

    {/* personIndex will hold index of the person in the array..
      return true or false (if id of an person in array is equal with id that
      we receiveed as an argument to this function)
    */}

    const person = {
      ...this.state.persons[personIndex]
    }
    {/* then get the persons itself by reaching out to this.state.persons
      and accessing the element at the person index */}

      person.name = event.target.value
      const persons = [...this.state.persons]
      persons[personIndex] = person;

      {/* update the person name .. we can do this cuz we got a coppy
        we are not updating the original one
        */}

    this.setState({
      persons: persons
    })
  {/* update persons array which is a coppy of the old array where we updated
    one element with the updated person where we adjusted the name */}
  }


  handlePersonsToggle = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }


  handleDeletePerson = (personIndex) => {
    const delete_person = [...this.state.persons]
    delete_person.splice(personIndex,1); {/* will remove only one element from array */}
    this.setState({
      persons: delete_person
    })
  }


  render(){
    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((xx,remove) => {
            return <Person
              click = {() => this.handleDeletePerson(remove)}
              name={xx.name}
              age={xx.age}
              key={xx.id}
              changed={(event) => this.handleOnChangeMethod(event,xx.id)}
              />
           })}
        </div>
      )
    }

    {/* this is simple CSS className Dynamically
    let classes = ["red","bold"].join(" ");
    */}

    {/* some if example with Dynamically */}
      const classes = []
      if(this.state.persons.length <= 2){
        classes.push("red");  // classes = ["red"]
      }
      if(this.state.persons.length <= 1){
        classes.push("bold"); // classes = ["red","bold"]
      }

    return(
        <div className="App">
          <p className={classes.join(" ")}>Some React Examples</p>
          <StyledButton alt={this.state.showPersons} onClick={this.handlePersonsToggle}>Toggle</StyledButton>
           {persons}
         </div>
      )
    }
  }

export default Example
