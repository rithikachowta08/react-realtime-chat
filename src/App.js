import React from 'react';
import Chat from './lib';
import './App.scss';

// Info of participants in the chat
const user1 = {
  name: 'Jon',
  id: '1004',
  imageUrl:
    'https://cdn.vox-cdn.com/thumbor/8vF1atBpBCuBB0guzWVeHieVwCA=/99x0:1179x810/920x613/filters:focal(99x0:1179x810):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg'
};

const user2 = {
  name: 'Daenerys',
  id: '1005',
  imageUrl:
    'https://vignette.wikia.nocookie.net/gameofthrones/images/e/ee/QueenDaenerysTargaryenIronThrone.PNG/revision/latest?cb=20190520173137'
};

const App = () => {
  // Function to switch current user i.e "you" in the chat and reload the chat in the new role
  const currentUserId = localStorage.getItem('currentUserId') || user1.id;
  if (currentUserId !== user1.id || currentUserId !== user2.id) {
    localStorage.removeItem('currentUserId');
  }
  const switchRoles = () => {
    if (currentUserId === user1.id) {
      localStorage.setItem('currentUserId', user2.id);
    } else {
      localStorage.setItem('currentUserId', user1.id);
    }
    window.location.reload();
  };

  // Get receiver info based on who the current user is
  const getReceiver = () => (currentUserId === user1.id ? user2 : user1);

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
        currentUserId={currentUserId}
        receiver={getReceiver()}
      />
      <button className="btn" onClick={switchRoles}>
        Switch role
      </button>
    </div>
  );
};

export default App;
