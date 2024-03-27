import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { Theme } from "../components/Theme"

export function AuthenticationForm ( props ) {
    return (
        <View style={ styles.form }>
            <Text style={ styles.title }>{ props.title }</Text>
            <Text style={ styles.label }>Email</Text>
            <TextInput style={ styles.input } />
            <Text style={ styles.label }>Password</Text>
            <TextInput style={ styles.input } secureTextEntry={true} />
            <Pressable style={ styles.button }>
                <Text style={ styles.buttonText }>{ props.action }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: "white",
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20
    },
    label: {
        marginTop: 15,
    },
    input: {
        borderBottomColor: "#666666",
        borderBottomWidth: 1,
        padding: 5,
        marginTop: 2,
    },
    button: {
        marginTop: 30,
        backgroundColor: Theme.secondary,
        padding: 12,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
})