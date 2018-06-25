import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './store';

//UI Components
import Login from './components/login';

export default class App extends Component {
    render() {
        const LoginView = Login.UI;

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <LoginView />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    }
});