
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (

    <div>
      {/* Do not remove the main div */}
      {/* <p>Enter your name: </p> */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      {/* Display personalized greeting */}
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
