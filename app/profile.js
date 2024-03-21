import { SafeAreaView, Text } from "react-native";
import { Link } from "expo-router";
export default function Profile() {
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Link href="/">Back to Home</Link>
        </SafeAreaView>
    )
}