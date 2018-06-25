import {Linking, Platform} from 'react-native';
import SafariView from 'react-native-safari-view';

import {INIT, AVATAR_CHANGE} from './reducer';

export function login(user) {
    return {
        type: INIT,
        payload: {
            request: {
                url: `/users/${user}/repos`
            }
        }
    };
}

export function loginSuccess() {
    return {type: AVATAR_CHANGE, payload: {}};
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