import {View,Text,StyleSheet, Pressable } from 'react-native'
export default function Detail(props) {
    return (
        <View>
            <Text>{ props.name }</Text>
        </View>
    )
}