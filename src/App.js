import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EntryForm from './EntryForm';
import Error from './Error';
import List from './List';

function App() {

  const [names, setNames] = useState([]);
  const [error, setError] = useState('');
  
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <EntryForm names={names} setNames={setNames} setError={setError} />
      { error.length > 0 ? <Error error={error} /> : <br/> }
      <List names={names} />
    </div>
  );
}

export default App;
