import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {createStore, applyMiddleware} from 'redux';

import Signup from './components/signup';

const client = axios.create(config);
export default createStore(Signup.Reducer, applyMiddleware(axiosMiddleware(client)));