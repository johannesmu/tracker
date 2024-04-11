import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from 'react'
import { Theme } from "../theme/Theme"
import { Stack } from "expo-router"
import { DBContext } from "../contexts/DBContext"

export default function Home( props ) {
    const [ started, setStarted ] = useState( false )

    const db = useContext( DBContext )

    const manageTask = () => {

    }

    return (
        <View style={ styles.container }>
            <Stack.Screen options={{ headerShown: true }}/>
            <View style={ styles.form }>
                <Text>Task Name</Text>
                <TextInput />
                <Pressable style={ styles.button }>
                    <Text style={ styles.buttonText }>Start</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    form: {
        backgroundColor: Theme.secondary,
    },
    button: {
        backgroundColor: Theme.dark,
        padding: 10,
    },
    buttonText: {
        color: Theme.primaryLight,
        textAlign: "center",
    }
})