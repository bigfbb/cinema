import React from "react";
import {  useNavigate } from "react-router-dom";
const App = () => {
  const navigate=useNavigate()

  const click = () => {
    (localStorage.getItem("isLogged")==="true")? navigate("/addMovie") : navigate("/Profile")
  
    console.log(localStorage.getItem("isLogged"))

  }
  return (
    <div id="bilDiv">
      <button id="AddMovie" onClick={click}>Add Movie</button>

      <h1 id="lom">welcome To Land of Movies</h1>
      <img id="ib" src="https://picsum.photos/200/300?random=1" alt="#"></img>
    </div>
  )
}

export default App