import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import backgroundOne from '@/assets/images/background-one.jpg';
import { Link } from 'expo-router';

const Contact = () => {
  return (
    <View>
      <ImageBackground
        source={backgroundOne}
        resizeMode='cover'
        style={{ height: '100%' }}
      >
        <Text style={styles.text}>Contact Us</Text>
        <Text style={styles.textTwo}>Email: victoryma23@gmail.com </Text>
      </ImageBackground>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  textTwo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
});
