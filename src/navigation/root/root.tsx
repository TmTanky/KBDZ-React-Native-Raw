import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

// Screens
import { AuthScreen } from '../../screens/auth'
import { HomeStackNavigator } from '../home/home'

// Types
import { Istate } from '../../types/interfaces'

const RootStack = createNativeStackNavigator()

export const RootStackNavigator = () => {

    const user = useSelector((state: Istate) => state.user)

    return (
        <RootStack.Navigator>
            { user ?
                <RootStack.Screen options={{ headerShown: false }} name="authscreen" component={AuthScreen} /> : 
                <RootStack.Screen name="homehome" component={HomeStackNavigator} />
            }
        </RootStack.Navigator>
    )

}