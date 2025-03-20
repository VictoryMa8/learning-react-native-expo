import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import backgroundOne from '@/assets/images/background-one.jpg';
import { Link, router } from 'expo-router';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.replace('/auth');
      }
    });

    return unsubscribe;
  }, []);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundOne}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.text}>LeBron Fan App</Text>
        <Text style={styles.text}>An app for LeBron fans alike</Text>
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
        <Pressable
          style={[
            styles.buttonStyle,
            { backgroundColor: 'rgba(255, 0, 0, 0.75)' },
          ]}
          onPress={() => auth.signOut()}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
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
