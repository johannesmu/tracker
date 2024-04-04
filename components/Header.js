import { View, Text, StyleSheet } from "react-native"
export function Header( props ) {
  return(
    <View style={ styles.container }>
      <Text>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})