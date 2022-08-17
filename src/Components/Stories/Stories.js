import React from 'react';
import {View, Image} from 'react-native';
import styles from './Stories.style';
function Stories() {
  return (
    <View>
      <Image style={styles.image} source={require('../../assets/post.jpg')} />
    </View>
  );
}

export default Stories;
