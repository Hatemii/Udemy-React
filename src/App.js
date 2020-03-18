import React, { useState } from 'react';
import Person from "./Person/Person"

const App = props => {
  const[personState,setPersonState]=useState({
    persons:[
      {name:"Max",age:12},
      {name:"Larry",age:32},
      {name:"George",age:30}
    ],
    otherState: "some other value"
  });

  const [otherState,setOtherState] = useState({
    otherState: "some other value 2"
  });

  console.log(personState,otherState);


  const handleChangeNames = () =>{
    setPersonState({
      persons:[
        {name:"Maxim",age:12},
        {name:"Laront",age:32},
        {name:"Paul",age:30}
      ]
    })
  }


    return(
      <div>
        <button onClick={handleChangeNames}>Switch Names</button>

        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />


      </div>
    )
  }


export default App;
