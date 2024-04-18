import { Stack } from "expo-router"
import { SafeAreaView, StyleSheet } from "react-native"
import { firebaseConfig } from "../config/Config"
import { initializeApp } from "@firebase/app"
import { getAuth, onAuthStateChanged } from "@firebase/auth"
import { getFirestore } from "@firebase/firestore"
import { AuthContext } from "../contexts/AuthContext"
import { ThemeContext } from "../contexts/ThemeContext"
import { StorageContext } from "../contexts/StorageContext"
import { DBContext } from "../contexts/DBContext"
import { Theme } from "../theme/Theme"
import { router } from "expo-router"
import { getStorage } from "firebase/storage"

export default function Layout() {
    const FBapp = initializeApp(firebaseConfig)
    const FBauth = getAuth(FBapp)
    const FBdb = getFirestore(FBapp)
    const FBst = getStorage(FBapp)


    return (
        <ThemeContext.Provider value={Theme}>
            <AuthContext.Provider value={FBauth} >
                <DBContext.Provider value={FBdb}>
                    <StorageContext.Provider value={FBst}>
                        <SafeAreaView style={styles.appcontainer}>
                            <Stack screenOptions={{ headerShown: false }} />
                        </SafeAreaView>
                    </StorageContext.Provider>
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