import React, {Component} from 'react';
import {Linking, StyleSheet, Platform, Text, View} from 'react-native';
import SafariView from 'react-native-safari-view';

import GoogleButton from './googleButton';
import FacebookButton from './facebookButton';

class Login extends Component {
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
        // Extract stringified user string out of the URL
        const [,
            user_string] = url.match(/user=([^#]+)/);
        this.setState({
            // Decode the user string and parse it into JSON
            user: JSON.parse(decodeURI(user_string))
        });
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
    avatar: {
        margin: 20
    },
    avatarImage: {
        borderRadius: 50,
        height: 100,
        width: 100
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30
    }
});

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);