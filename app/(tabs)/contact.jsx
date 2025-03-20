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

export default function Contact() {
  return (
    <View>
      <ImageBackground
        source={backgroundOne}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.text}>Contact Us</Text>
        <Text style={styles.textTwo}>Email: victoryma23@gmail.com </Text>
        <Image
          style={styles.imageTwo}
          source={require('@/assets/images/basketball-dog.jpeg')}
        />
        <Link
          style={{ marginHorizontal: 'auto', marginVertical: 20 }}
          href='/'
          asChild
        >
          <Pressable style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Home</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: '1',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  textTwo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 50,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  imageTwo: {
    height: 300,
    width: 200,
    borderRadius: 50,
  },
  buttonStyle: {
    justifyContent: 'center',
    height: 60,
    width: 200,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});
