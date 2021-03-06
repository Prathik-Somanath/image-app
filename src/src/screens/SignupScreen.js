import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignupScreen() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        value={userName}
        placeholderText="Name"
        onChangeText={name => setName(name)}
        autoCapitalize="none"
        keyboardType="default"
        autoCorrect={false}
      />
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton
        disabled={email === '' || password === ''}
        buttonTitle="Signup"
        onPress={() => register(userName, email, password)}
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
