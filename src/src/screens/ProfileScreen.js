import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../components/FormButton';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';
// import {useIsFocused} from '@react-navigation/native';

export default function ProfileScreen({navigation}) {
  const {user} = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);
  const getUser = async () => {
    const userData = await firestore().collection('users').doc(user.uid).get();
    console.log('userDetails:', userData._data);
    setUserDetails(userData._data);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image
        style={styles.avatar}
        source={{
          uri:
            'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png',
        }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          {userDetails && <Text style={styles.name}>{userDetails.name}</Text>}
          {userDetails && userDetails.bio ? (
            <Text style={styles.bio}>{userDetails.bio}</Text>
          ) : (
            <Text style={styles.bio}>Empty Bio</Text>
          )}
          {userDetails && userDetails.desc ? (
            <Text style={styles.description}>{userDetails.desc}</Text>
          ) : (
            <Text style={styles.description}>Empty Description</Text>
          )}
          <FormButton
            buttonTitle="Edit"
            onPress={() =>
              navigation.navigate('EditProfile', {userDetails, getUser})
            }
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'tomato',
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    // flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  bio: {
    fontSize: 16,
    color: 'tomato',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
