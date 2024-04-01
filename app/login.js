import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuth } from "../components/AlternateAuth"
import { Theme } from "../theme/Theme"
export default function Login () {
    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Sign in to your account" action="Sign in"/>
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