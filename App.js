import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HeaderComponent from './src/components/headerComponent/HeaderComponent';
import HomeComponent from './src/components/homeComponent/HomeComponent';
import NavigationComponent from './src/components/navigationComponent/NavigationComponent';
import AboutScreen from './src/screens/aboutScreen/About';
import ContactScreen from './src/screens/contactScreen/ContactScreen';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import OnBOrdingScreen from './src/screens/onBordingScreen/onBording';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <OnBOrdingScreen /> */}
      {/* <HomeScreen /> */}
      {/* <HeaderComponent /> */}
      {/* <NavigationComponent /> */}
      {/* <AboutScreen /> */}
      <ContactScreen />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
});
