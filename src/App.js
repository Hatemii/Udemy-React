import React, { useState } from 'react';
import Person from "./Person/Person"
import "./App.css"

export default class Example extends React.Component {
  state = {
    persons:[
      {id:1, name:"Max",age:12},
      {id:2, name:"Larry",age:32},
      {id:3, name:"George",age:30}
    ],
    otherState: "some other value",
    showPersons: false
  }

  handleOnChangeMethod = (event) => {
    this.setState({
      persons:[
        {name: "Lauront",age:12},
        {name: event.target.value, age:32},
        {name:"Paul",age:30}
      ]
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
    delete_person.splice(personIndex,1); {/* will remove only one element from array */}
    this.setState({
      persons: delete_person
    })
  }


  render(){
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor:"pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((xx,remove) => {
            return <Person
              click = {() => this.handleDeletePerson(remove)}
              name={xx.name} age={xx.age}
              key={xx.id} />
           })}
        </div>
      )
    }

    return(
      <div className="App">
        <button style={style} onClick={this.handlePersonsToggle}>Toggle</button>
         {persons}
       </div>
      )
    }
  }
