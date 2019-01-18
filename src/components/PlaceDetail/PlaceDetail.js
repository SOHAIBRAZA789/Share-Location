import React from 'react';
import { Button, Image, StyleSheet, Text, View, Modal } from 'react-native';

const PlaceDetail = (props) => {
    // alert(props.selectedPlace);
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.avatarImage} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
            </View>
        )
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.selectedPlace !== null}
            onRequestClose={props.onModalClosed}
        >

            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" onPress={props.onItemDeleted} />
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontSize: 'bold',
        textAlign: "center",
        fontSize: 28
    }
});
export default PlaceDetail;