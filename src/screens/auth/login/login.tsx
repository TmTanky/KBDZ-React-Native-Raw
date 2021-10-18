import React, { useState, FC, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import auth from '@react-native-firebase/auth'
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";

// Components
import { CustomBtn } from "../../../components/customBtn/customBtn";

const LoginScreen: FC<{setMode: Dispatch<SetStateAction<boolean>>}> = ({setMode}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const emailPassSignIn = async () => {
        
        const userCredential = await auth().signInWithEmailAndPassword(email, pass)
        console.log(userCredential.user)

    }

    const loginGoogle = async () => {
        
        await GoogleSignin.hasPlayServices()
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);

    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.root}>
            <View style={styles.form}>
                <Text style={styles.heading}> Login </Text>
                <TextInput value={email} onChangeText={setEmail} style={styles.inputs} placeholder="Email" />
                <TextInput secureTextEntry={true} value={pass} onChangeText={setPass} style={styles.inputs} placeholder="Password" />
                <TouchableHighlight onPress={emailPassSignIn} style={styles.loginBtn}>
                    <CustomBtn textStyle={styles.textStyle} name="Login" />
                </TouchableHighlight>
                <Text style={styles.or}> or </Text>
                <TouchableHighlight onPress={loginGoogle} style={styles.googleBtn}>
                    <CustomBtn textStyle={styles.googleStyle} name="Login with Google" />
                </TouchableHighlight>
                <Text style={styles.info} onPress={() => setMode(prev => !prev)} > Don't have an account? Sign Up now </Text>
                {/* <GoogleSigninButton onPress={loginGoogle} /> */}
            </View>
        </KeyboardAvoidingView>
    )

}

export default LoginScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center'
        // backgroundColor: 'red'
    },
    form: {
        display: 'flex',
        marginHorizontal: 10
    },
    heading: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold'
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
        letterSpacing: 1.2,
        textTransform: 'uppercase'
    },
    or: {
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 15
    },
    googleBtn: {
        borderColor: '#db4437',
        borderWidth: 5,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleStyle: {
        color: '#db4437',
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    info: {
        marginTop: 10
    }
})