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
    if (this.state.showPersons){
      persons = (
        <div>
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.handleOnChangeMethod} />
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
         </div>
         {/* React first check if is something inside Render then execute Return
           So we can write code here and just return it down there in Return(..{inside curly}...)
        */}
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
