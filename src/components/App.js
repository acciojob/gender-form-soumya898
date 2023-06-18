
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
  
      <label for="gender"><h2>Select your gender</h2></label>
       <option value="male">Male</option>
       <option value="female">Female</option>
       <label for="shirtSize">Select your shirt size:</label>
       <select >
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
