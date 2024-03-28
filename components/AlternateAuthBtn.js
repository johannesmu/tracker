import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export function AlternateAuthBtn( props ) {
    return (
        <View style={styles.button}>
            <Text>{ props.text } <Link href={ props.link }>{ props.linkText }</Link></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 20,
        marginVertical: 20,
        alignItems: "center",
    },
    buttonText: {
        textAlign: "center",
    }
})