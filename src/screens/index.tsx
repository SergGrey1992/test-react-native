import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {RootStackParamList} from "../types/typesNavigator";
import RootScreen from "./RootScreen";
import HomeScreen from "./HomeScreen";
import {HeaderIcon} from '../common/Header/HeaderIcon';
import {LogoIcon} from "../common/SvgLogo";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//const Stack = createDrawerNavigator<RootStackParamList>();
//const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();

const RouterStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Root'} component={RootScreen}/>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RouterStack;

//drawerPosition: 'right',
//headerLeft: () => <LogoIcon/>,
//headerTitle: () => undefined,
//headerTintColor: 'white', /*меняет цвет у всего хедера*/
//headerPressOpacity: 0.8,
// headerPressColor: 'red',
// headerLeftContainerStyle: {
//     paddingLeft: 12,
//     maxHeight: 60,
// },
// headerRightContainerStyle: {
//     marginRight: 22
// },
// headerStyle: {
//     backgroundColor: '#0D0C0B',
//     //alignItems: 'center', /*не работает*/
//     height: 90,
// },
// headerRight: ({tintColor, pressColor, pressOpacity}) => <HeaderIcon
//     navigation={navigation.toggleDrawer}
//     tintColor={tintColor}
//     pressColor={pressColor}
//     pressOpacity={pressOpacity}
// />,