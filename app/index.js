import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
import { AuthenticationForm } from "../components/AuthenticationForm"
export default function Home () {
    return (
        <SafeAreaView style={styles.container}>
            <AuthenticationForm title="Register for an account" action="Sign up"/>
            <View>
                <Text>Already have an account? <Link href="/login">Click here</Link></Text>
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