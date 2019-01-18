import React from 'react';
import {
    Button,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

const PlaceInput = (props) => (
    <View style={styles.inputContainer} >
        <TextInput
            placeholder="Enter your place"
            onChangeText={props.placeNameChangedHandler}
            value={props.placeName}
            style={styles.placeInput}
        />
        <Button
            title="Add"
            onPress={props.placeSubmitHandler}
            style={styles.placeButton}
        />
    </View>
);


const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }

});

export default PlaceInput;
