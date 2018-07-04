import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Linking, StyleSheet, Platform, Text, View} from 'react-native';
import SafariView from 'react-native-safari-view';

import GoogleButton from './googleButton';
import FacebookButton from './facebookButton';

import {loginSuccess} from './actions';

class Login extends Component {
    static navigationOptions = {
        header: null
    }
    // Set up Linking
    componentDidMount() {
        // Add event listener to handle bikemeet:// URLs
        Linking.addEventListener('url', this.handleOpenURL);
        // Launched from an external URL
        Linking
            .getInitialURL()
            .then((url) => {
                if (url) {
                    this.handleOpenURL({url});
                }
            });
    };

    componentWillUnmount() {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({url}) => {
        const [,
            user_string] = url.match(/user=([^#]+)/);

        user = JSON.parse(decodeURI(user_string))
        if (user) {
            this
                .props
                .loginSuccess(user);
            this
                .props
                .navigation
                .navigate('Signup');
        } else {
            const [,
                error] = url.match(/error=([^#]+)/);
            this
                .props
                .loginFail(error);
        }
        if (Platform.OS === 'ios') {
            SafariView.dismiss();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.header}>
                        Welcome Stranger!
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <FacebookButton onClick={() => {}}/>
                    <GoogleButton onClick={() => {}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    buttons: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30
    }
});

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginSuccess: loginSuccess
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);