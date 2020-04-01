import React from "react"
import Person from "./Person/Person"

const persons = (props) => props.persons.map((xx,remove) => {
    return <Person
      click ={() =>{
      if (window.confirm('Are you sure you wish to delete this item?'))
      props.clicked(remove)}}
      name={xx.name}
      age={xx.age}
      key={xx.id}
      changed={(event) => props.changed(event,xx.id)}
      />
   })

   export default persons
