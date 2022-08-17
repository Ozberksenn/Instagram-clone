import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Stories.style';
function Stories({data}) {
  return (
    <View>
      <Image style={styles.image} source={{uri: data.item.profilePicture}} />
      <Text style={styles.text}>{data.item.userName}</Text>
    </View>
  );
}

export default Stories;
