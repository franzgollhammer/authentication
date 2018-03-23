import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAzCxApRDoYOLG-qYZ_0_h0dBVWzLe24jc",
      authDomain: "authentication-6e1b7.firebaseapp.com",
      databaseURL: "https://authentication-6e1b7.firebaseio.com",
      projectId: "authentication-6e1b7",
      storageBucket: "authentication-6e1b7.appspot.com",
      messagingSenderId: "400805764706"
  })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
