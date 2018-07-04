import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default Avatar = (props) => {
    const {image, name, onClick} = props;
    const action = () => {
        console.log("Icon touched");
        onClick();
    };

    // Show user info if already logged in
    const userAvatar = (
        <View style={styles.content}>
            <Text style={styles.header}>
                Welcome {name}!
            </Text>
            <View style={styles.avatar}>
                <Image
                    source={{
                    uri: image
                }}
                    style={styles.avatarImage}
                    onPress={action}/>
            </View>
        </View>
    );

    // Show Please log in message if not
    const emptyAvatar = (
        <View style={styles.content}>
            <Text style={styles.header}>
                Welcome Stranger!
            </Text>
            <View style={styles.avatar}>
                <Icon
                    name="user-circle"
                    size={100}
                    color="rgba(0,0,0,.09)"
                    onPress={this.action}/>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {image
                ? userAvatar
                : emptyAvatar}
        </View>
    );
};