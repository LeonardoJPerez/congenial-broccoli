import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    avatarImage: {
        borderRadius: 50,
        height: 100,
        width: 100
    }
});

export default Avatar = (props) => {
    const {image, onClick} = props;
    const action = () => {
        console.log("Icon touched");
        onClick();
    };

    // Show user info if already logged in
    const userAvatar = (<Image
        source={{
            uri: image
        }}
        style={styles.avatarImage}
        onPress={action}/>);

    // Show Please log in message if not
    const emptyAvatar = (<Icon
        name="user-circle"
        size={100}
        color="rgba(0,0,0,.09)"
        onPress={action}/>);

    return (image
        ? userAvatar
        : emptyAvatar);
};