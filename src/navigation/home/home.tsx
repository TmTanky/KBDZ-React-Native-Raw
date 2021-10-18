import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AllProductsScreen } from '../../screens/main/shop'

const HomeStack = createNativeStackNavigator()

export const HomeStackNavigator = () => {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="allproducts" component={AllProductsScreen} />
        </HomeStack.Navigator>
    )

}