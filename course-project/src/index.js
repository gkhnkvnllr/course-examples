import React from "react";
import ReactDOM from 'react-dom';

function getButtonText(givenText) {
  return givenText;
}


const App = () => {
  const buttonText = 'Click me!';

  return <div>
    <label className= "label" htmlFor="name">Enter name: </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white', margin: '5px'}}>{getButtonText(buttonText)}</button>
  </div>
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
); 