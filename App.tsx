import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { useDispatch } from 'react-redux'

// Root Navigator
import { RootStackNavigator } from './src/navigation/root/root'

// Redux
import { store, persistor } from './src/redux'
import { loginUser } from './src/redux/actions/actions'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '763487461234-6ohjt457eiss8p8jis9omsf3ep17nnrm.apps.googleusercontent.com'
    })
  }, [])

  useEffect(() => {
    const subcribe = auth().onAuthStateChanged(user => {
      dispatch(loginUser(user!))
    })
    return subcribe
  }, [])

  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <NavigationContainer>
          <RootStackNavigator/>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  )
  
}

export default App