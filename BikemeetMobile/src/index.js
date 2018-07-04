import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import store from './store';

//UI Components
import LoginNavigator from './components/loginNavigator';

export default class App extends Component {
    render() {
        const LoginView = LoginNavigator.UI;

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <LoginView/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
