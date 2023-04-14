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
