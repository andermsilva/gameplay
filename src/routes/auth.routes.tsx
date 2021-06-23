import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { SingIn } from "../screens/Singin";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name='Singin'
                component={SingIn}
            />
            <Screen
                name='Home'
                component={Home}
            />
        </Navigator>

    );
}



