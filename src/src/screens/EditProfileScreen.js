import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {AddUserData} from '../api/AddData';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function EditProfileScreen({route, navigation}) {
  const {user} = useContext(AuthContext);
  const {userDetails, getUser} = route.params;
  const [userName, setName] = useState(userDetails ? userDetails.name : '');
  const [userBio, setBio] = useState(userDetails.bio ? userDetails.bio : '');
  const [userDesc, setDesc] = useState(
    userDetails.desc ? userDetails.desc : '',
  );

  console.log('aasdasdas', userDetails, user.uid);
  return (
    <View style={styles.container}>
      <FormInput
        value={userName}
        placeholderText="Name"
        onChangeText={name => setName(name)}
        autoCapitalize="none"
        keyboardType="default"
        autoCorrect={false}
      />
      <FormInput
        value={userBio}
        placeholderText="Bio"
        onChangeText={name => setBio(name)}
        autoCapitalize="none"
        keyboardType="default"
        autoCorrect={false}
      />
      <FormInput
        value={userDesc}
        placeholderText="Description"
        onChangeText={name => setDesc(name)}
        autoCapitalize="none"
        keyboardType="default"
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Save"
        onPress={() => {
          AddUserData(user.uid, {
            name: userName,
            bio: userBio,
            desc: userDesc,
          });
          navigation.goBack();
          getUser();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});
