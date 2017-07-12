import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { viewStyles } from '../styles';

class SwipeScreen extends Component { 

  getLikeText(like) {
    if (like) {
      return 'LIKE';
    }
    return 'DISLIKE';
  }

  getLikeColor(like) {
    if (like) {
      return '#00cc99';
    }
    return '#ff5050';
  }


  renderLikes() {
    const { container, row } = viewStyles;

    const likes = [];
    for (let i = 0; i < this.props.likes.length; i++) {
      const like = this.props.likes[i]
      likes.push(
        <View 
          style={[ container, row, { margin: 5, backgroundColor: this.getLikeColor(like.like) }]}
          key={i}
          >
          <Image
            style={{width: 50, height: 50, marginRight: 30}}
            source={{uri: like.image}}
          />
          <Text>
            {this.getLikeText(like.like)}
          </Text>
        </View>
      );
    }
    return likes;
  }

  render () {
    const { container } = viewStyles;
    return (
      <ScrollView style={ container }>
        {this.renderLikes()}
      </ScrollView>
    );
  }
}


const mapStateToProps = ({ store }) => {
  console.log(store);
  const {
    username,
    likes
  } = store;

  return { 
    username,
    likes
  };
};

export default connect( mapStateToProps , {  })(SwipeScreen);
