import React, { useState } from 'react';
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"
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

    const person = {
      ...this.state.persons[personIndex]
    }

      person.name = event.target.value
      const persons = [...this.state.persons]
      persons[personIndex] = person;

    this.setState({
      persons: persons
    })

  }

  handlePersonsToggle = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }


  handleDeletePerson = (personIndex) => {
    const delete_person = [...this.state.persons]
    delete_person.splice(personIndex,1);
    this.setState({
      persons: delete_person
    })
  }


  render(){

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.handleDeletePerson}
          changed={this.handleOnChangeMethod} />

    }

    return(
        <div className="App">
           <Cockpit
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.handlePersonsToggle}
             />
           {persons}
         </div>
      )
    }
  }

export default Example
