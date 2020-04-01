import React from "react"

const cockpit = (props) =>{

  const classes = []
  if(props.persons.length <= 2){
    classes.push("red");
  }
  if(props.persons.length <= 1){
    classes.push("bold");
  }

  return(
    <div>

      <p className={classes.join(" ")}>Some React Examples</p>
      <button
        onClick={props.clicked}
      >Toggle</button>

    </div>
  );
};

export default cockpit;
