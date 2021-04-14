import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import Loading from '../components/Loading';
import {AuthContext} from '../navigation/AuthProvider';
import FastImage from 'react-native-fast-image';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import axios from 'axios';

// import {fetchImages} from '../api/FetchImages';

export default function HomeScreen() {
  const {user, logout} = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  const fetchImages = (count = 5) => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'nVcNALuZNoMjAmJmKvgm-3vTQyq8u3z5YqBbPNZdA5c';

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        console.log('img data received:');
        setImages([...images, ...res.data]);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchImages();
    console.log('images in homescreen: ', images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {/* <View style={styles.container}> */}
      {loaded ? (
        images.map((image, index) => (
          <FastImage
            key={index}
            style={styles.imageContainer}
            source={{uri: image.urls.regular}}
            resizeMode={FastImage.resizeMode.stretch}
          />
        ))
      ) : (
        <Loading />
      )}
      {/* <Text style={styles.text}>Welcome user {user.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} /> */}
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
  imageContainer: {
    // width: windowWidth - 44,
    // height: windowHeight / 3 - 50,
  },
});
