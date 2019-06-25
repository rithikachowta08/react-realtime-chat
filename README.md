# React Realtime Chat
> One to one chat component built using Firebase's realtime database. This component can be used to intialize a chat window for a user who is logged in to your application, with another user of your application.

![Chat GIF](https://i.imgur.com/VrV3unZ.gif)

## Requirements
A login and signup flow must already be implemented in your application. This component must be rendered only on pages where your user has already logged in. It is assumed that information regarding the receiver of the messages is already known at the time of invoking this component.

## Installation
`npm install --save react-realtime-chat`

## Usage

- Create an app on firebase and copy the configuration object to be passed as props to the chat component.
  
```jsx harmony
<Chat
  config={{
    apiKey: 'dummy-key',
    authDomain: 'chat-775a1.firebaseapp.com',
    databaseURL: 'https://chat-775a1.firebaseio.com',
    projectId: 'chat-775a1',
    storageBucket: 'chat-775a1.appspot.com',
    messagingSenderId: '24901292295',
    appId: '1:249012927295:web:0f77d4'
  }}
  currentUserId="45878"
  receiver={{
    name: 'Rithika',
    id: '129090',
    imageUrl:
      'https://miro.medium.com/fit/c/256/256/2*XRuD351hKGF-w6TdhF0wVw.jpeg'
  }}
  height="500px"
  themeColor="#3C5A99"
  textColor="#fff"
/>
```

## Options

![alt text](https://i.imgur.com/3a8HOmu.png)

## Links and examples

- Full example on Github: [Example](https://github.com/rithikachowta08/react-realtime-chat/tree/master/src).

- Live working demo: [Demo](https://afternoon-wildwood-14794.herokuapp.com/).

- Tutorial on how this package was implemented : [Medium article]().

## License

react-realtime-chat is released under [MIT License](https://opensource.org/licenses/MIT).

