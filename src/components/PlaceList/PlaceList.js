import React, { Fragment } from 'react';
import ListItem from '../ListItem/ListItem';
import { StyleSheet, Text, FlatList } from 'react-native';

const PlaceList = (props) => {

    return (

        <FlatList
            style={styles.listContainer}
            data={props.places}
            keyExtractor = { (item, index) => index.toString() }
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.value}
                    avatarImage= {info.item.avatarImage}
                    onItemPress={() => props.onItemSelected(info.item.key)}
                />
            )}
        />


        // {props.places.map((place, i) => <Text key={i}>{place.value}</Text>)}

    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList;
