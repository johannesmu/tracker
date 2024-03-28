import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuthBtn } from "../components/AlternateAuthBtn"

export default function Login () {
    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Login to your account" action="Sign in" validation={ false } />
            <AlternateAuthBtn text="Don't have an account?" link="/" linkText="sign up here"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent: "center",
    },
})