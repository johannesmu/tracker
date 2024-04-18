import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from 'react'
import { Theme } from "../theme/Theme"
import { Stack } from "expo-router"
import { DBContext } from "../contexts/DBContext"
import { AuthContext } from "../contexts/AuthContext"
import { collection, addDoc, query, getDocs } from "firebase/firestore"

export default function Home( props ) {
    const [ started, setStarted ] = useState( false )
    const [ startTime, setStartTime ] = useState()
    const [ stopTime, setStopTime ] = useState()
    const [ taskName, setTaskName] = useState('')
    const [ listData, setListData ] = useState([])

    const auth = useContext( AuthContext )
    const userId = auth.currentUser.uid
    const db = useContext( DBContext )

    const getTime = () => {
        return new Date().getTime()
    }

    const manageTask = () => {
        if( !started ) {
            setStarted( true )
            setStartTime( getTime() )
        }
        else {
            setStarted( false )
            setStopTime( getTime() )
        }
    }

    const saveTask = async () => {
        const task = { start: startTime, stop: stopTime, name: taskName }
        const dbcollection = collection( db, `usertasks/${userId}/tasks`)
        const docRef = await addDoc( dbcollection, task )
    }

    const readData = async () => {
        const q = query( collection( db, `usertasks/${userId}/tasks` ) )
        const querySnapshot = await getDocs( q )
        let data = []
        querySnapshot.forEach( (doc) => {
            let item = doc.data()
            item.id = doc.id
            data.push( item )
        })
        setListData( data )
    }

    useEffect( () => {
        readData()
        setStarted(true)
    }, [started])

    return (
        <View style={ styles.container }>
            <Stack.Screen options={{ headerShown: true }}/>
            <View style={ styles.form }>
                <Text>Task Name</Text>
                <TextInput value={taskName} onChangeText={ (text) => setTaskName(text) } />
                <Pressable
                 style={ ( taskName.length > 2 ) ? styles.button : styles.buttonDisabled } 
                    onPress={ () => manageTask() }>
                    <Text style={ styles.buttonText }>{ (started) ? "Stop" : "Start"}</Text>
                </Pressable>
                <Pressable onPress={ () => saveTask() } >
                    <Text>Save Task</Text>
                </Pressable>
            </View>
            <FlatList 
                data={ listData }
                renderItem={ ({item}) => ( <Text>{ item.name }</Text>) }
                keyExtractor={(item) => item.id }
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    form: {
        backgroundColor: Theme.secondary,
    },
    button: {
        backgroundColor: Theme.dark,
        padding: 10,
    },
    buttonText: {
        color: Theme.primaryLight,
        textAlign: "center",
    },
    buttonDisabled: {
        backgroundColor: Theme.mid,
        padding: 10,
    },
    list: {
        marginVertical: 10,
    }
})