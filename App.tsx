import {LogBox, StyleSheet, Text, View } from 'react-native';
import RouterStack from "./src/screens";
LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
  // <View style={styles.container}>
  //   <Text>Open up App.tsx to start working on your app!</Text>
  // </View>
  return (
      <RouterStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
