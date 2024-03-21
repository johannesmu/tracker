import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Link } from "expo-router"
export default function Home () {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Link href="/profile">Go to Profile</Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue"
    }
})