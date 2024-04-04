import { View, Text, SafeAreaView, StyleSheet} from "react-native"

import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuth } from "../components/AlternateAuth"
import { Theme } from "../theme/Theme"
export default function Login () {
    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Register for an account" action="Sign up"/>
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