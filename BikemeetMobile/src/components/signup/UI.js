import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Avatar from '../avatar';

import actions from './actions';

class Signup extends Component {
    state = {
        user: undefined, // user has not logged in yet
    };

    // Set up Linking
    componentDidMount() {
        console.log("Checking Location services");
    };

    componentWillUnmount() {};

    render() {
        const {user, changeAvatar} = this.prop;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Avatar 
                        onClick={changeAvatar} 
                        image={user} 
                        name={user.name} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.header}>
                        Fields need to be added.
                    </Text>
                </View>
            </View>
        );
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: {
        paddingVertical: 5
    }
};

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
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30
    }
});

const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = {
    changeAvatar: actions.changeAvatar
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);