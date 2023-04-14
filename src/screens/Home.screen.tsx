import React from "react";
import { View, Button } from 'react-native';

function HomeScreen({navigation}:any): JSX.Element {
    return (
        <View>
            <Button title={'Todo List'} onPress={()=> navigation.navigate('Todo List')}/>
            <Button title={'Albums'} color={'green'} onPress={()=> navigation.navigate('Albums')}/>
        </View>
    )
}

export default HomeScreen