import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {createStore, applyMiddleware} from 'redux';

import config from './config';
import rootReducer from './reducers';

const client = axios.create(config);

export default createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));