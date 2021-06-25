import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

import { SingIn } from "../screens/Singin";

import { userAuth } from "../hooks/auth";

export function Routes() {
    const { user } = userAuth();
    return (
        <NavigationContainer>
            {user.id ?

                <AuthRoutes />
                :
                <SingIn />
            }
        </NavigationContainer>
    );
}