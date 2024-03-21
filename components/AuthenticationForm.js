import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"

export function AuthenticationForm ( props ) {
    return (
        <View style={ styles.form }>
            <Text style={ styles.title }>{ props.title }</Text>
            <Text>Email</Text>
            <TextInput style={ styles.input } />
            <Text>Password</Text>
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
    input: {
        borderBottomColor: "#666666",
        borderBottomWidth: 2,
        padding: 5,
    },
    button: {
        marginTop: 30,
        backgroundColor: "darkblue",
        padding: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
})