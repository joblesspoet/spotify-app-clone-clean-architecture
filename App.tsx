import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLogo from './src/components/common/AppLogo';

export default function App() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <AppLogo  />
    </View>
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
