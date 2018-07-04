import {Linking, Platform} from 'react-native';
import SafariView from 'react-native-safari-view';

import {TOAST_DISPLAY, SIGNUP_FORM} from '../actionTypes';

export function loginSuccess(user) {
    return {
        type: SIGNUP_FORM,
        payload: {
            user
        }
    };
}

export function loginFail(message) {
    return {type: TOAST_DISPLAY, payload: {
            message
        }};
}

export function openURL(url) {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
        SafariView.show({url: url, fromBottom: true} // Or Linking.openURL on Android
        );
    } else {
        Linking.openURL(url);
    }
}