// import { Slot } from "expo-router"
import { Stack } from "expo-router"
import { SafeAreaView, StyleSheet } from "react-native"


export default function MainPage() {
    return (
        <SafeAreaView style={styles.appView}>
            <Stack screenOptions={{
                headerShown: false
            }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appView: {
        flex: 1,
    }
})