import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet, Text, TextInput, View, Picker} from 'react-native';

import Avatar from '../avatar';

import * as actions from './actions';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            state: '',
            country: ''
        };
    }

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
                    <Text style={styles.header}>
                        Welcome {user.name || "Stranger"}!
                    </Text>
                    <View style={styles.avatar}>
                        <Avatar onClick={changeAvatar} image={user.avatar} name={user.name}/>
                    </View>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.textbox}
                            placeholder={"Email"}
                            onChangeText={(text) => this.setState({text})}
                            value={user.email}/>
                        <TextInput
                            style={styles.textbox}
                            placeholder={"Full Name"}
                            onChangeText={(text) => this.setState({text})}
                            value={user.name}/>
                        <TextInput
                            style={styles.textbox}
                            maxLength={40}
                            placeholder={"Birthdate"}
                            onChangeText={(text) => this.setState({text})}/>
                        <TextInput
                            style={styles.textbox}
                            maxLength={40}
                            placeholder={"Gender"}
                            onChangeText={(text) => this.setState({text})}/>
                        <Picker
                            selectedValue={this.state.state}
                            mode={'dialog'}
                            onValueChange={(itemValue, itemIndex) => this.setState({state: itemValue})}>
                            <Picker.Item label="Select a State" value=""/>
                            <Picker.Item label="Georgia" value="georgia"/>
                            <Picker.Item label="Washington" value="washington"/>
                        </Picker>
                        <Picker
                            selectedValue={this.state.country}
                            mode={'dialog'}
                            onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue})}>
                            <Picker.Item label="Select a Country" value=""/>
                            <Picker.Item label="US" value="us"/>
                            <Picker.Item label="Canada" value="canada"/>
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5e5c5c',
        flex: 1,
        padding: 10
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30
    },
    header: {
        fontSize: 20,
        marginBottom: 30,
        textAlign: 'center'
    },
    avatar: {
        paddingBottom: 30
    },
    form: {
        width: 350
    },
    textbox: {
        alignSelf: 'stretch',
        borderColor: 'gray',
        borderWidth: 1,
        height: 35,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 5
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