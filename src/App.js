import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAzCxApRDoYOLG-qYZ_0_h0dBVWzLe24jc",
      authDomain: "authentication-6e1b7.firebaseapp.com",
      databaseURL: "https://authentication-6e1b7.firebaseio.com",
      projectId: "authentication-6e1b7",
      storageBucket: "authentication-6e1b7.appspot.com",
      messagingSenderId: "400805764706"
  })

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setState({ loggedIn: true })
    }
    else {
      this.setState({ loggedIn: false })
    }
  })

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>    
            <Button onPress={ () => {
              firebase.auth().signOut()
            }}>
              Log Out
            </Button>
          </CardSection>
        )  
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
