# React Realtime Chat
> One to one chat component built using Firebase's realtime database.

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

