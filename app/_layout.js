import { Slot } from "expo-router";
import { Text, View, StyleSheet } from "react-native"

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
        <Slot />
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})