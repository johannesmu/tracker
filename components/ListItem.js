import {View,Text,Pressable,StyleSheet} from 'react-native'

export function ListItem (props) {
    return (
        <View style={ styles.item }>
            <Text>{ props.name }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#CCCCCC",
        padding: 10,
    }
})