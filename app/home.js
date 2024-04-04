import { View, Text, StyleSheet } from "react-native"
import { Stack } from "expo-router"

export default function Home( props ) {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true }}/>
            <Text>Home</Text>
        </View>
    )
}