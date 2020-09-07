import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

import data from './data.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Cards 
          cities={data}
        />
      </div>
    );
  }
}

export default App;
