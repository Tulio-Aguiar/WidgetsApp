import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'Whats is React?',
        content: 'React is a front end javascript framework.'
    },
    {
        title:'Why use React?',
        content: 'React os a favorite JS library among enginners.'
    }, 
    {   
        title:'How do you use React?',
        content: 'You use React by creating components.' 
    }
];

const options =[
  {
    label: 'The color Red',
    value: 'Red',
  },
  {
    label: 'The color Green',
    value: 'Green'
  },
  {
    label:'A Shade of Blue',
    value:'Blue'
  }
];


const App = () => {
 const [selected, setSelected] = useState (options[0]);
 
    return (
      <div>
        <Header />
        <Route path="/">
          <Accordion items={items}/>
        </Route>

        <Route path="/search">
          <Search options={options}/>
        </Route>

        <Route path="/dropdown">
          <Dropdown 
            label="Select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>

        <Route path="/translate">
          <Translate />
        </Route>

      </div>
    );
  };
  export default App;