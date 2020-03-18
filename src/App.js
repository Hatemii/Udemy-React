import React from 'react';
import Person from "./Person/Person"


class App extends React.Component{
  render(){
    return(
      <div>
        <Person name="Lebron" age="34" />
        <Person name="Alex" age="54" />
        <Person name="John" age="24" />

      </div>
    )
  }
}

export default App;
