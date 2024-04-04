import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { useState, useEffect } from "react"
import { Theme } from "../theme/Theme"

export function AuthenticationForm ( props ) {
    const [ email, setEmail ] = useState('')
    const [ validEmail, setValidEmail ] = useState(false)
    const [ password, setPassword ] = useState('')
    const [ validPassword, setValidPassword ] = useState(false)

    useEffect( () => {
       
        // validate email, if valid, change validEmail to true
        // find the @ symbol
        let atIndex = email.indexOf('@')
        // find the . symbol
        let dotIndex = email.indexOf('.')
       
        if( atIndex > 0 == 1 && dotIndex > 0 ) {
            setValidEmail( true )
        }
        else {
            setValidEmail( false )
        }
    }, [email] )

    useEffect( () => {
        
        if( password.length >= 8 ) {
            setValidPassword( true )
        }
        else {
            setValidPassword( false )
        }
    }, [password] )
    
    return (
        <View style={ styles.form }>
            <Text style={ styles.title }>{ props.title }</Text>
            <Text style={ styles.label }>Email</Text>
            {/* email */}
            <TextInput 
                style={ ( validEmail) ? styles.validInput : styles.input } 
                value={ email }
                onChangeText={ (content) => setEmail( content ) }
            />
            <Text style={ styles.label }>Password</Text>
            {/* password */}
            <TextInput 
                style={ ( validPassword ) ? styles.validInput : styles.input } 
                secureTextEntry={true} 
                value={ password }
                onChangeText={ (content) => setPassword( content ) }
            />
            <Pressable 
                style={ (validEmail && validPassword) ? styles.button :styles.buttonDisabled }
                disabled={ (validEmail && validPassword ) ? false : true }
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
    label: {
        marginTop: 15,
    },
    input: {
        borderBottomColor: "#666666",
        borderBottomWidth: 1,
        padding: 5,
        marginTop: 2,
    },
    validInput: {
        borderBottomColor: "green",
        borderBottomWidth: 1,
        padding: 5,
        marginTop: 2,
    },
    button: {
        marginTop: 30,
        backgroundColor: Theme.secondaryDark,
        padding: 12,
        borderRadius: 10,
    },
    buttonDisabled: {
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