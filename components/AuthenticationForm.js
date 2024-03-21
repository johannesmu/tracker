import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"

export function AuthenticationForm ( props ) {
    return (
        <View>
            <Text>{ props.title }</Text>
            <Text>Email</Text>
            <TextInput />
            <Text>Password</Text>
            <TextInput />
            <Pressable>
                <Text>{ props.action }</Text>
            </Pressable>
        </View>
    )
}