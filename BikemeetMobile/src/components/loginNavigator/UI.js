import {createStackNavigator} from 'react-navigation'

//UI Components
import Login from '../login';
import Signup from '../signup';

export default Navigator = createStackNavigator({
    Login: {
        screen: Login.UI
    },
    Signup: {
        screen: Signup.UI
    }
}, {initialRouteName: 'Login'})