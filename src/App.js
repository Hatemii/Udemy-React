import React from 'react';
import Person from "./Person/Person"


class App extends React.Component{
  state ={
    persons:[
      {name:"Max",age:12},
      {name:"Larry",age:32},
      {name:"George",age:30}
    ],
    otherState: "some other value"

  }

  handleChangeNames = () =>{
    this.setState({
      persons:[
        {name:"Maxim",age:12},
        {name:"Laront",age:32},
        {name:"Paul",age:30}
      ]
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleChangeNames}>Switch Names</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />


      </div>
    )
  }
}

export default App;
