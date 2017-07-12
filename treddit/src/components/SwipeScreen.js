import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { cardSwiped } from '../actions';
import { Card } from './Card';
import { viewStyles, inputStyles, buttonStyles} from '../styles';


class SwipeScreen extends Component { 

  constructor(props) { 
    super(props); 
    this.state = {
      cards : []
    };
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/aww.json')
    .then(r => r.json())
    .then(data => {
      console.log(data.data.children)
      const posts = [];
      for (let i = 0; i < data.data.children.length; i++) {
        const post = data.data.children[i];
        if (post.data.url.includes('.jpg')) {
          posts.push(
            { image: post.data.url}
          );
        } 
      }
      this.setState({ cards: posts });
      console.log(this.state.cards);
    })
    .catch(e => console.log("Booo"))
  }

  handleLike (card) {
    this.props.cardSwiped(card.image, true);
  };

  handleDislike (card) {
    this.props.cardSwiped(card.image, false);
  };

  onButtonPress() {
    this.props.navigation.navigate('LikeScreen');
  }

  render () {

    const { container, centerHorizontal, centerVertical } = viewStyles;
    const { login } = inputStyles;
    const { regular } = buttonStyles;

    return (
      <View style={{flex: 1}}>

        <TouchableOpacity 
          onPress={this.onButtonPress.bind(this)}
          style = {[ regular, centerHorizontal, centerVertical, { margin: 10 }]}
          >
          <Text>
            {`${this.props.username}, check your likes!`}
          </Text>
        </TouchableOpacity>

        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <View />}
          yupText='Like'
          nopeText='Dislike'
          handleYup={this.handleLike.bind(this)}
          handleNope={this.handleDislike.bind(this)}
        />

      </View>
    );
  }
}


const mapStateToProps = ({ store }) => {
  const {
    username
  } = store;

  return { 
    username
  };
};

export default connect( mapStateToProps , { cardSwiped })(SwipeScreen);
