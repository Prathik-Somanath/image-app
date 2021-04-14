import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';
import FormButton from '../components/FormButton';
import Loading from '../components/Loading';
import {AuthContext} from '../navigation/AuthProvider';
import FastImage from 'react-native-fast-image';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FeedFinishFooter from '../components/FeedFinishFooter';
import axios from 'axios';

export default function HomeScreen() {
  const {user, logout} = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [limitExceeded, setLimit] = useState(false);
  const [page, setPage] = useState(1);
  const query = 'Bike'; //search image query

  const fetchImages = () => {
    console.log('fetching....');
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'nVcNALuZNoMjAmJmKvgm-3vTQyq8u3z5YqBbPNZdA5c';

    axios
      .get(
        `${apiRoot}/search/photos/?page=${page}&per_page=10&query=${query}&client_id=${accessKey}`,
      )
      .then(res => {
        // console.log('img data received:', res.data);
        setPage(page + 1);
        setImages([...images, ...res.data.results]);
        setIsLoaded(true);
      })
      .catch(err => {
        console.log(err);
        setLimit(true);
      });
  };

  const renderImages = ({item, index}) => {
    const {urls} = item;
    return (
      <View style={styles.cardContainer}>
        <FastImage
          key={index}
          style={styles.imageContainer}
          source={{uri: urls.small, priority: FastImage.priority.normal}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>{item.alt_description}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderImages}
        onEndReachedThreshold={0.9}
        onEndReached={fetchImages}
        ListFooterComponent={limitExceeded && <FeedFinishFooter />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  cardContainer: {
    width: windowWidth - 44,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 2,
  },
  textBox: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    color: '#333333',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  imageContainer: {
    // width: windowWidth - 44,
    height: 235,
  },
});
