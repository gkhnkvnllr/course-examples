import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";

import Route from "./components/Route";

const items = [
  {
    title: 'What is React?',
    content: 'React is a framework'
  },
  {
    title: 'What is Angular?',
    content: 'React is a framework'
  },
  {
    title: 'What is this?',
    content: 'It is a pencil'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  },
];

const languageOptions = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return( 
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          dropdownType="color"
        />
      </Route>
      <Route path="/translate">
        <Translate languageOptions={languageOptions}/>
      </Route>
    </div>
  )
}

export default App;
