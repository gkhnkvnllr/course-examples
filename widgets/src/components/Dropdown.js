import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, dropdownType }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)){
        return;
      } 
      
      setToggle(false);
    };


    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };

  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return(
      <div 
        key={option.value} 
        className="item" 
        style={{ color: `${option.value}`}}
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    );
  });

  return(
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{`Select a ${dropdownType}`}</label>
        <div className="ui selection dropdown visible active" onClick={() => {setToggle(!toggle)}}>
          <i className="dropdown icon"/>
          <div className="text" style={{ color: `${selected.value}`}}>{selected.label}</div>
          {toggle &&
            <div className="menu visible transition">{renderedOptions}</div>
          }
        </div>
      </div>
    </div>
  )
}


export default Dropdown;