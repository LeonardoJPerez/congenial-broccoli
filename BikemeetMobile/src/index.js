import React from 'react';
import {Provider} from 'react-redux';

import Login from './components/login';

export default class App extends React.Component {
    render() {
        return (<Login />);
    }
}