import React, { useState } from 'react';
import Person from "./Person/Person"

export default class App extends React.Component {
  state = {
    persons:[
      {name:"Max",age:12},
      {name:"Larry",age:32},
      {name:"George",age:30}
    ],
    otherState: "some other value"
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

  render(){
    return(
      <div>
        {/*this is first way of changing*/}
        <button onClick={this.handleChangeNames.bind(this, "Mark")}>Switch Names</button>

        {/*this is second way of changing*/}
        <button onClick={() => this.handleChangeNames("Jordan")}>Switch Names2</button>

      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.handleOnChangeMethod} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}
