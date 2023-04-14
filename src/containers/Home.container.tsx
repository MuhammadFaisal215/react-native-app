import React from 'react';
import HomeScreen from '../screens/Home.screen';

function HomeContainer({ navigation }: any): JSX.Element {
    return (
        <HomeScreen navigation={navigation}/>
    );

}

export default HomeContainer