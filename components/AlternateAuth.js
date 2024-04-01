import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"
export function AlternateAuth(props) {
  return (
    <View style={styles.component}>
      <Link href={props.route}>{props.text} {props.linkText}</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
})