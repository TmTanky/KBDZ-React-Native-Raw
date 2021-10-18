import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AllProductsScreen = () => {

    return (
        <View style={styles.root}>
            <Text> All Products </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'red'
    }
})