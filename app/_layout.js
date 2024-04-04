import { Stack } from "expo-router"
import { SafeAreaView, StyleSheet } from "react-native"
import { firebaseConfig } from "../config/Config"
import { initializeApp } from "@firebase/app"
import { getAuth } from "@firebase/auth"
import { getFirestore } from "@firebase/firestore"
import { AuthContext } from "../contexts/AuthContext"
import { ThemeContext } from "../contexts/ThemeContext"
import { DBContext } from "../contexts/DBContext"
import { Theme } from "../theme/Theme"

export default function Layout() {
    const FBapp = initializeApp(firebaseConfig)
    const FBauth = getAuth(FBapp)
    const FBdb = getFirestore(FBapp)

    return (
        <ThemeContext.Provider value={Theme}>
            <AuthContext.Provider value={FBauth} >
                <DBContext.Provider value={FBdb}>
                    <SafeAreaView style={styles.appcontainer}>
                        <Stack screenOptions={{ headerShown: false }} />
                    </SafeAreaView>
                </DBContext.Provider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

const styles = StyleSheet.create({
    appcontainer: {
        flex: 1,
    }
})