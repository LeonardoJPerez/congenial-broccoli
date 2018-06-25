import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {openURL} from './actions';

const CALLBACK_URL = 'http://localhost:8888/auth/facebook/callback';

const iconStyles = {
    borderRadius: 10,
    iconStyle: {
        paddingVertical: 5
    }
};

export default facebookLogin = (props) => {    
    return (
        <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => {
                openURL(CALLBACK_URL);
            }}
            {...iconStyles}>
            Login with Facebook
        </Icon.Button>
    );
}