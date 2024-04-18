import { SafeAreaView, StyleSheet} from "react-native"
import { useContext, useEffect } from "react"

import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuth } from "../components/AlternateAuth"
import { Theme } from "../theme/Theme"
import { AuthContext } from "../contexts/AuthContext"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { router, useRouter } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"

export default function Register ( props ) {
    const auth = useContext( AuthContext )
    const router = useRouter()
    
    useEffect( () => {
        if( auth.currentUser.uid ) {
            router.replace('/home')
        }
    })

    const createAccount = ( email, password ) => {
        createUserWithEmailAndPassword(auth,email,password)
            .then( (userCredential) => {
                router.replace('/home')
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