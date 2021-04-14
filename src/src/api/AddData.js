import firestore from '@react-native-firebase/firestore';

export const AddUserData = (uid, data) => {
  console.log('adding Data', uid, data);
  firestore()
    .collection('users')
    .doc(uid)
    .set(data)
    .then(() => {
      console.log('User added!');
    })
    .catch(err => console.log('error in adding data: ', err));
};
