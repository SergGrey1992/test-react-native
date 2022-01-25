import React from 'react';
import { View, Text } from 'react-native';

const RootScreen = ({navigation}: any) => {
    debugger
    console.log('navi: ', navigation)
    return (
        <View>
            <Text>Root Screen</Text>
            </View>
    );
};

export default RootScreen;