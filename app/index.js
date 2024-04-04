import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Theme } from "../theme/Theme"
import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuthBtn } from "../components/AlternateAuthBtn"

export default function Home () {
    return (
        <View style={styles.container}>
            <AuthenticationForm title="Register for an account" action="Sign up" validation={true} />
            <AlternateAuthBtn text="Already have an account?" link="/login" linkText="sign in here"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryLight,
        justifyContent: "center",
    },
})