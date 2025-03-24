import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Modal,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { React, useState } from 'react';
import backgroundOne from '@/assets/images/flower-wallpaper.jpg';
import { Link } from 'expo-router';

export default function App() {
  // useState for modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* using imported background image */}
      <ImageBackground
        source={backgroundOne}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.text}>LeBron Fan App</Text>
        <Image
          style={styles.imageOne}
          source={require('@/assets/images/basketball-otter.jpeg')}
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
        <Modal
          animationType='slide'
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Toggled modal');
            setModalVisible(!modalVisible);
          }}
        >
          <SafeAreaView style={styles.modalShown}>
            <Pressable
              style={styles.buttonStyle}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Hide Modal</Text>
            </Pressable>
          </SafeAreaView>
        </Modal>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Show Modal</Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyleTwo}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Show Modal (Another Way)</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

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
    marginTop: 30,
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
  buttonStyleTwo: {
    justifyContent: 'center',
    height: 60,
    width: 500,
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
    height: 200,
    width: 300,
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
  modalShown: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
