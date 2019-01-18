import React, { Component } from 'react';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import AvatarImage from './src/assets/image.png';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: [],
      selectedPlace: null
    }
  }
  placeNameChangedHandler = (e) => {
    this.setState({
      placeName: e
    });
  };

  // ** FUNCTION FOR ADD TODO ** //
  placeSubmitHandler = () => {
    let { placeName } = this.state;
    if (placeName.trim() === '') {
      alert('Please Enter the Place');
    }
    else {
      this.setState(prevState => {
        return {
          // * We can also use without concat function *//
          // places: prevState.places.concat({
          //   key: Math.random(),
          //   value: placeName
          // }),
          places: [...prevState.places, { key: Math.random(), value: placeName, avatarImage: AvatarImage }],
          placeName: ''
        }
      });
    };
  };

  // ** FUNCTION FOR  SHOW MODAL ** //
  onItemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })

  }

  //** FUNCTION FOR DELETE ITEM *// 
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace:null
      };
    })
  }
  
  //** FUNCTION FOR CLOSE MODAL *//   
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    let { placeName, places } = this.state;
    return (
      <View style={styles.container}>

        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />

        <Text style={styles.welcome}>Welcome to Meetup!</Text>

        <View style={styles.inputContainer}>
          <PlaceInput
            placeNameChangedHandler={this.placeNameChangedHandler}
            placeSubmitHandler={this.placeSubmitHandler}
            placeName={placeName}
          />
        </View>

        <View style={styles.inputContainer}>
          <PlaceList
            places={places}
            onItemSelected={this.onItemSelectedHandler}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  inputContainer: {
    width: '100%',
    // flexDirection: "row",
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }


});
