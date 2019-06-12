import React from 'react';
import Chat from './lib';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Chat
        config={{
          apiKey: 'AIzaSyBdtn-6kbnWviIeDSPEbofK8czP1u9dioM',
          authDomain: 'chat-app-775a1.firebaseapp.com',
          databaseURL: 'https://chat-app-775a1.firebaseio.com',
          projectId: 'chat-app-775a1',
          storageBucket: 'chat-app-775a1.appspot.com',
          messagingSenderId: '249012927295',
          appId: '1:249012927295:web:035ae95584ff77d4'
        }}
        currentUser="rithika"
        receiver="vaishakh"
        senderImage="https://miro.medium.com/fit/c/256/256/2*XRuD351hKGF-w6TdhF0wVw.jpeg"
      />
    </div>
  );
}

export default App;
