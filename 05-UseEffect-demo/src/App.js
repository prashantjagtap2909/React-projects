import React, { useEffect } from "react";
import { useState } from "react";


function App () {

  
  const[text, setText] = useState(' ');
  const[name, setName] = useState('Prash');
  /* VAR 1

   useEffect( () => {
      console.log("UI RENDERING DONE")
   });


/* VAR 2 - first render
   useEffect(() =>{
    console.log("UI RENDERING DONE")
   },[]);

*/

// VAR 3 - first render +  whenever dependency 

/*
useEffect (() =>{
  console.log("Change observed")
},[name]);
*/


// VAR 4 - to handle unmounting of component
  useEffect (() =>{
      // add event listener

      console.log("Listener added");   // runs second  


      return () =>{ 
          console.log("Listener removed");   // runs first
      }
  },[]);


  function changeHandler(event){
    
    setText(event.target.value);
    console.log(text);
  }


  return (
    <div className="App">

      <input type="text" className="flex justify-center px-50" onChange={changeHandler}></input>

    </div>
    
  );
};

export default App;
