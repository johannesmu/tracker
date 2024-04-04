import { SafeAreaView, StyleSheet} from "react-native"
import { useContext } from "react"
import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuth } from "../components/AlternateAuth"
import { Theme } from "../theme/Theme"
import { AuthContext } from "../contexts/AuthContext"
import { signInWithEmailAndPassword } from "@firebase/auth"
import { router } from "expo-router"

export default function Login () {
    const auth = useContext( AuthContext )
    const SignIn = ( email, password ) => {
       signInWithEmailAndPassword(auth,email,password)
            .then( (userCredential) => {
                console.log( userCredential.user )
                router.replace('/home')
            })
            .catch( (error) => {
                console.log( error.code, error.message )
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Sign in to your account" action="Sign in" handler={SignIn}/>
            <AlternateAuth 
            text="Don't have an account?" 
            route="/"
            linkText="Sign up here"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryDark,
        justifyContent: "center",
    },
})