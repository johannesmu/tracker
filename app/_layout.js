// import { Slot } from "expo-router"
import { Stack } from "expo-router"
import { SafeAreaView, StyleSheet } from "react-native"
import { Theme } from "../theme/Theme"
import { ThemeContext } from "../contexts/ThemeContext"
import { Config } from "../config/Config"
import { initializeApp } from '@firebase/app';
import { getAuth } from "@firebase/auth"

export default function Layout() {
    const FBapp = initializeApp( Config )
    const FBauth = getAuth( FBapp )
    
    return (
        <ThemeContext.Provider value={Theme}>
            <SafeAreaView style={styles.appView}>
                <Stack screenOptions={{
                    headerShown: false
                }} />
            </SafeAreaView>
        </ThemeContext.Provider>
    )
}

const styles = StyleSheet.create({
    appView: {
        flex: 1,
    }
})