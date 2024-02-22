import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as Device from 'expo-device'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Device.designName = {Device.designName}</Text>
      <Text style={styles.bold}>Device.productName = {Device.productName}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
})
