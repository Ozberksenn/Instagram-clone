import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Stories.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Stories({data}) {
  return (
    <View>
      {data.item.plus ? (
        <Image
          style={styles.imageBorder}
          source={{uri: data.item.profilePicture}}
        />
      ) : (
        <Image style={styles.image} source={{uri: data.item.profilePicture}} />
      )}
      {data.item.plus && (
        <View style={styles.iconContainer}>
          <Icon style={styles.plus} size={15} name="plus" />
        </View>
      )}

      <Text style={styles.text}>{data.item.userName}</Text>
    </View>
  );
}

export default Stories;
