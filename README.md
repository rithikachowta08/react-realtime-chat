# React Realtime Chat
> One to one chat component built using Firebase's realtime database.

## Installation
`npm install --save react-realtime-chat`

## Usage

- Create an app on firebase and copy the configuration object to be passed as props to the chat component.
  
```jsx harmony
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
  currentUserId="45878"
  receiver={{
    name: 'Rithika',
    id: '129090',
    imageUrl:
      'https://miro.medium.com/fit/c/256/256/2*XRuD351hKGF-w6TdhF0wVw.jpeg'
  }}
/>
```

## Options

|     Params      | Value  |     Description      |
| :-------------: | :----: | :------------------: | :---------------------------------------------------------------------------: |
|       config       | object | Firebase configuration info of your Firebas App. Required to inititalize the Firebase SDK. |
|      receiver       | object |  An object in the form `{name:'', id: '', imageUrl: ''}`. This contains the information of the intended recipient of messages in the chatroom. imageUrl will be used to display an avatar for the recipient. |
|    currentUserId     | string | This is user id of the user who is currently logged into your application and is initiating the chat with the receiver. |

## Links and examples

- Full example on Github: [Example](https://github.com/rithikachowta08/react-realtime-chat/tree/master/src).

- Live working demo: [Demo]().

- Tutorial on how this package was implemented : [Medium article]().

## License

react-realtime-chat is released under [MIT License](https://opensource.org/licenses/MIT).

