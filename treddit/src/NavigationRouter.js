import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import SwipeScreen from './components/SwipeScreen';
import LikeScreen from './components/LikeScreen';

export const MainStack = StackNavigator({
  
  LoginScreen: {
    screen: LoginScreen
  },
  SwipeScreen: {
    screen: SwipeScreen
  },
  LikeScreen: {
    screen: LikeScreen
  },
}, {
  
});

