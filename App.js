import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import OnBOrdingScreen from './src/screens/onBordingScreen/onBording';


export default function App() {
  return (
    <View style={styles.container}>
      <OnBOrdingScreen />
      <StatusBar style="auto" />
    </View >
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
