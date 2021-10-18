import React, { useState, FC, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

// Components
import { CustomBtn } from "../../../components/customBtn/customBtn";

const RegisterScreen: FC<{setMode: Dispatch<SetStateAction<boolean>>}> = ({setMode}) => {

    return (
        <KeyboardAvoidingView behavior="height" style={styles.root}>
            <View style={styles.form}>
                <Text style={styles.heading}> Register </Text>
                <TextInput style={styles.inputs} placeholder="Email" />
                <TextInput style={styles.inputs} placeholder="Password" />
                <View style={styles.loginBtn}>
                    <CustomBtn textStyle={styles.textStyle} name="Register" />
                </View>
                <Text style={styles.info} onPress={() => setMode(prev => !prev)} > Have an account? Sign in now </Text>
            </View>
        </KeyboardAvoidingView>
    )

}

export default RegisterScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        marginHorizontal: 10
    },
    heading: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    inputs: {
        marginBottom: 5,
        paddingHorizontal: 10
    },
    loginBtn: {
        backgroundColor: 'black',
        height: 50,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    textStyle: {
        color: 'white',
        letterSpacing: 1.5,
        textTransform: 'uppercase'
    },
    info: {
        marginTop: 10
    }
})