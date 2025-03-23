import {
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
// importing lists of images and text from constants folder
import THINGS_ITEMS from '@/constants/thingsItems.js';
import THINGS_IMAGES from '@/constants/thingsImages.js';

export default function Things() {
  // checking if user is using the web
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

  const separatorComponent = <View style={styles.separator}></View>;

  const headerComponent = <Text style={styles.header}>Top of List</Text>;
  const footerComponent = <Text style={styles.footer}>Bottom of List</Text>;

  return (
    <Container>
      <FlatList
        data={THINGS_ITEMS}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separatorComponent}
        ListHeaderComponent={headerComponent}
        ListHeaderComponentStyle={styles.header}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.listItem}>
              <Text style={styles.textStyle}>{item.title}</Text>
              <Text style={styles.textStyle}>{item.description}</Text>
              {/* source of image is THINGS_IMAGES list file */}
              <Image
                style={styles.imageStyle}
                source={THINGS_IMAGES[item.id - 1]}
              ></Image>
            </View>
          </View>
        )}
      ></FlatList>
    </Container>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginTop: 10,
    color: 'white',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  listItem: {
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'cornflowerblue',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    width: '50%',
    marginHorizontal: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  footer: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
});
