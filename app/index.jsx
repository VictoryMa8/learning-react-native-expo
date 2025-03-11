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

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundOne}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.text}>LeBron Fan App</Text>
        <Image
          style={styles.imageOne}
          source={require('@/assets/images/basketball-cat.jpeg')}
        />
        <Link
          style={{ marginHorizontal: 'auto', marginVertical: 20 }}
          href='/contact'
          asChild
        >
          <Pressable style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
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
  imageOne: {
    height: 350,
    width: 350,
    borderRadius: 50,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    resizeMode: 'cover',
  },
});
