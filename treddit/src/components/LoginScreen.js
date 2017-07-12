import React, { Component } from 'react';
import { View, Text, Platform, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { loginUser } from '../actions';
import { viewStyles, inputStyles, buttonStyles} from '../styles';

class LoginScreen extends Component { 

  constructor(props) { 
    super(props); 
    this.state = { 
      username: '',
      password: ''
    }; 
  }

  onUsernameChange(text) {    
    this.setState({ ...this.state, username: text });
  }

  onPasswordChange(text) {
    this.setState({ ...this.state, password: text });
  }

  onButtonPress() {
    
    if (this.state.password !== 'password') {
      Alert.alert(
        'Oops!',
        'Wrong password, sorry'
      )
      return;
    }

    this.props.loginUser(this.state.username);
    this.props.navigation.navigate('SwipeScreen', { user:  this.state.username });
  }

  render () {

    const { container, centerVertical, centerHorizontal } = viewStyles;
    const { login } = inputStyles;
    const { regular } = buttonStyles;

    return (
      <View style={[ container ]}>

        <TextInput
          secureTextEntry={false}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          onChangeText={this.onUsernameChange.bind(this)}
          value={this.state.username}
          style={[ login, { margin: 10 }]}
        />

        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.state.password}
          style={[ login, { margin: 10 }]}
        />

        <TouchableOpacity 
          onPress={this.onButtonPress.bind(this)}
          style = {[ regular, centerHorizontal, centerVertical, { margin: 10 }]}
          >
          <Text>
            Login
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}


export default connect( null , { loginUser })(LoginScreen);
