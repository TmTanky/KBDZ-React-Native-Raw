import { FirebaseAuthTypes } from '@react-native-firebase/auth'

// Action Types
import { LOGIN_USER } from '../actionTypes/actionTypes'

// Types
import { Iuser } from '../../types/interfaces'

export const loginUser = (user: FirebaseAuthTypes.User) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}