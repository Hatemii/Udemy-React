import React, { useState } from 'react';
import Person from "./Person/Person"
import "./App.css"

export default class Example extends React.Component {
  state = {
    persons:[
      {name:"Max",age:12},
      {name:"Larry",age:32},
      {name:"George",age:30}
    ],
    otherState: "some other value",
    showPersons: false
  }

 handleChangeNames = (newName) =>{
    this.setState({
      persons:[
        {name:newName,age:12},
        {name:"Laront",age:32},
        {name:"Paul",age:30}
      ]
    })
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
          {this.state.persons.map(xx => {
            return <Person name={xx.name} age={xx.age} />
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
