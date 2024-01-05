import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import IconLogin from './assets/login.svg'
import IconSnow from './assets/snow.svg'
import IconReact from './assets/react.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app !</Text>
      <View style={styles.iconContainer}>
        <Image source={IconLogin} style={styles.icon} tintColor="coral" />
        <Image source={IconSnow} style={styles.icon} tintColor="coral" />
        <Image source={IconReact} style={styles.icon} tintColor="coral" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: 'coral',
  },
})
