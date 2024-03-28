import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
import { AuthenticationForm } from "../components/AuthenticationForm"
export default function Login () {
    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Sign in to your account" action="Sign in"/>
            <View>
                <Text>Don't have an account? <Link href="/">Click here</Link></Text>
            </View>
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