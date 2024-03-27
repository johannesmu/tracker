import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
import { Theme } from "../components/Theme"
import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuthBtn } from "../components/AlternateAuthBtn"

export default function Home () {
    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Register for an account" action="Sign up"/>
            <AlternateAuthBtn text="Already have an account?" link="/login" linkText="sign in here"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryLight,
        justifyContent: "center",
    },
})