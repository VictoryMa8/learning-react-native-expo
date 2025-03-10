import { Text, Image, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 50, margin: 10 }}>Hello Vro...</Text>
      <Image
        source={require('@/assets/images/basketball-cat.jpeg')}
        style={{ width: 300, height: 300, borderRadius: 50 }}
      />
    </View>
  );
}
