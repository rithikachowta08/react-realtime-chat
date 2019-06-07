import React from 'react';
import Chat from './lib';
import { getDateFromUnixTime } from './utils/timeFunctions';
import './App.css';

console.log(getDateFromUnixTime(1234556));
function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
