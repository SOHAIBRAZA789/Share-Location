import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
        {/* <View style={styles.listImage}>
           
        </View> */}
        <View style={styles.listItem}>
            <Image resizeMode='cover' source={props.avatarImage} style={styles.listImage} />
            <Text>
                {props.placeName}
            </Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center'
    },
    listImage : {
        marginRight: 8,
        height: 30,
        width:30
    }
});
export default ListItem;