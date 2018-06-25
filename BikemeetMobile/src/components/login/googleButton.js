import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {openURL} from './actions';

const CALLBACK_URL = 'http://localhost:8888/auth/google/callback';

const iconStyles = {
    borderRadius: 10,
    iconStyle: {
        paddingVertical: 5
    }
};

export default googleLogin = (props) => {
    return (
        <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            onPress={() => {
                openURL(CALLBACK_URL);
            }}
            {...iconStyles}>
            Or with Google
        </Icon.Button>
    );
}