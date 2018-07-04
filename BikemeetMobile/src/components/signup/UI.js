import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import Avatar from '../avatar';

import * as actions from './actions';

class Signup extends Component {
    // Set up Linking
    componentDidMount() {
        console.log("Checking Location services");
    };

    componentWillUnmount() {};

    render() {
        const {user, changeAvatar} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Avatar onClick={changeAvatar} image={user.avatar} name={user.name}/>
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
    return {user: state.signup.user};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeAvatar: actions.changeAvatar
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);