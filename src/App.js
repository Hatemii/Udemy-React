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



    return(
      <div className="App">
        {/*this is first way of changing values
          <button style={style} onClick={this.handleChangeNames.bind(this, "Mark")}>Switch Names</button>*/}

        {/*this is second way of changing values
        <button onClick={() => this.handleChangeNames("Jordan")}>Switch Names2</button>*/}


        {/* SHOW OR HIDE BY CLICKING*/}
          {/*  /// this is important to know (dont forget {} brackets) ///
          { this.state.showPerson ? .....
          	now this showPerson is (false) and we want to chose what we want to do
          	when showPerson goes true ....   : null }
            : is like "else" in if else condition that we cant put something there or leave it null "nothing to do" }
           */}

           <button style={style} onClick={this.handlePersonsToggle}>Toggle</button>
           {
             this.state.showPersons === true ?
             <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.handleOnChangeMethod} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
              </div>
              : null
              }
          </div>
          )
        }
      }
