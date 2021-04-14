import React from 'react';
import {View, StyleSheet} from 'react-native';
import Loading from '../components/Loading';

export default () => {
  return (
    <View style={styles.footer}>
      <Loading />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 30,
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
