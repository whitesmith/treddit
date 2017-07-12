import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Card = ({ image }) => {
  console.log(image);
  return (
    <View style={styles.card}>
      <Image
        style={styles.thumbnail}
        source={{uri: image}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 250,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 250,
    height: 250,
  }
})

export { Card };
