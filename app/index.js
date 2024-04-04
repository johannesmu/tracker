import { SafeAreaView, StyleSheet} from "react-native"
import { useContext } from "react"

import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuth } from "../components/AlternateAuth"
import { Theme } from "../theme/Theme"
import { AuthContext } from "../contexts/AuthContext"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { router } from "expo-router"

export default function Register ( props ) {
    const auth = useContext( AuthContext )
    
    const createAccount = ( email, password ) => {
        createUserWithEmailAndPassword(auth,email,password)
            .then( (userCredential) => {
                console.log( userCredential.user )
                router.push('/home')
            })
            .catch( (error) => {
                console.log( error.code, error.message )
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Register for an account" action="Sign up" handler={createAccount} />
            <AlternateAuth 
            text="Already have an account?"
            route="/login" 
            linkText="Login" 
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: Theme.primaryLight,
        justifyContent: "center",
    },
})