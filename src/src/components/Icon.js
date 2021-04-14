import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Icon(icon) {
  return (
    <Ionicons
      onPress={() => icon.onPress()}
      name={icon.iconName}
      size={22}
      style={{paddingRight: 10}}
      color={'gray'}
    />
  );
}
