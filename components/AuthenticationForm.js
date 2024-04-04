import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { useState, useEffect } from "react"
import { Theme } from "../theme/Theme"

export function AuthenticationForm ( props ) {
    const [ email, setEmail ] = useState('')
    const [ validEmail, setValidEmail ] = useState(false)
    const [ password, setPassword ] = useState('')
    const [ validPassword, setValidPassword ] = useState(false)

    useEffect( () => {
        if( email.indexOf('@') > 0 && email.indexOf('.') > 0 ) {
            setValidEmail( true )
        }
        else {
            setValidEmail( false )
        }
    }, [ email ])

    useEffect( () => {
        if( password.length >= 8 ) {
            setValidPassword( true )
        }
        else {
            setValidPassword( false )
        }
    }, [password])

    const actionHandler = () => {
        props.handler( email, password )
    }

    return (
        <View style={ styles.form }>
            <Text style={ styles.title }>{ props.title }</Text>
            <Text>Email</Text>
            <TextInput 
                style={ (validEmail) ? styles.validInput : styles.input } 
                value={ email }
                onChangeText={ (text) => setEmail(text) }
            />
            <Text>Password</Text>
            <TextInput 
                secureTextEntry={true} 
                value={ password }
                onChangeText={ (text) => setPassword(text) }
                style={ (validPassword) ? styles.validInput : styles.input } 
            />
            <Pressable 
                style={ (validEmail && validPassword) ? styles.button : styles.buttonDisabled }
                disabled={ (validEmail && validPassword ) ? false : true  }
                onPress={() => actionHandler() }
            >
                <Text style={ styles.buttonText }>{ props.action }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: Theme.secondaryLight,
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
    validInput: {
        borderBottomColor: "#0ac43c",
        borderBottomWidth: 2,
        padding: 5,
    },
    button: {
        marginTop: 30,
        backgroundColor: Theme.primaryDark,
        padding: 10,
    },
    buttonDisabled: {
        marginTop: 30,
        backgroundColor: Theme.primary,
        padding: 10,
    },
    buttonText: {
        color: Theme.primaryLight,
        textAlign: "center",
    }
})