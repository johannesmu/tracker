import { View, Text, Pressable, StyleSheet } from "react-native"
import { signOut} from "@firebase/auth"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function SignOut ( props ) {
    const auth = useContext( AuthContext )

    const signUserOut = () => {
        signOut( auth )
        .then( () => console.log("signed out") )
        .catch( (error) => console.log(error.code) )
    }
    return (
        <View>
            <Pressable onPress={ () => signUserOut() }>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    )
}
