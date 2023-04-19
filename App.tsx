/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import TodoListsContainer from './src/containers/TodoLists.container';
import AlbumsContainer from './src/containers/Albums.container';
import AlbumDetailsContainer from './src/containers/AlbumDetails.container';
import HomeContainer from './src/containers/Home.container';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/stores/reducers';
// import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import firebase from 'react-native-firebase';
// PushNotification.configure({
//   onRegister: function(token:any) {
//     console.log('TOKEN:', token);
//   },
//   onNotification: function(notification:any) {
//     console.log('NOTIFICATION:', notification);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB9vMh3BH3oEd_gU4t6tuGwNNKqkqqQBKQ",
  databaseURL: "https://fitness2well.firebaseio.com",
  projectId: "fitness2well",
  storageBucket: "fitness2well.appspot.com",
  messagingSenderId: "515841385068",
  appId: "1:515841385068:web:212de99c0f86debc4dae49"
}, 'Test App');

// Request user permission for receiving notifications
messaging().requestPermission();

// Get the device token
messaging()
  .getToken()
  .then(token => {
    console.log(token);
  });

// Receive notifications
messaging().onMessage(notification => {
  console.log(notification);
});

// Handle background notifications
messaging().setBackgroundMessageHandler(async notification => {
  console.log(notification);
  // Do something with the notification
});

// Handle foreground notifications
messaging().onNotificationOpenedApp(notification => {
  console.log(notification);
  // Do something with the notification
});


function App(): JSX.Element {
  return (

    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeContainer}
            />
            <Stack.Screen
              name="Todo List"
              component={TodoListsContainer}
            />
            <Stack.Screen
              name="Albums"
              component={AlbumsContainer}
            />
            <Stack.Screen
              name="Albums/Details"
              component={AlbumDetailsContainer}
            />

          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>


  )

}


export default App;
