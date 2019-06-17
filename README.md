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

1. config: object
Firebase configuration info of your Firebase App. Required to inititalize the Firebase SDK.
2. receiver: object 
An object in the form `{name:'', id: '', imageUrl: ''}`. This contains the information of the intended recipient of messages in the chatroom. imageUrl will be used to display an avatar for the recipient.
3. currentUserId: string
This is user id of the user who is currently logged into your application and is initiating the chat with the receiver.
4. themeColor: string
This is the theme color that will be used for your UI. Default value is #3cb3dd (blue)
5. textColor: string
This is the text color that will be used in the message body. Default value is #ffffff (white)
6. height: string
Sets the height of your chat window. Default value is 100% 
7. width: string
Sets the width of your chat window. Default value is 100% 
8. sendIcon: string
Image used as the send icon in the chat input field. 
9. loader: string
Loader image to be displayed while messages are loading. 

## Links and examples

- Full example on Github: [Example](https://github.com/rithikachowta08/react-realtime-chat/tree/master/src).

- Live working demo: [Demo](https://afternoon-wildwood-14794.herokuapp.com/).

- Tutorial on how this package was implemented : [Medium article]().

## License

react-realtime-chat is released under [MIT License](https://opensource.org/licenses/MIT).

