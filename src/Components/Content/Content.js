import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Content.style';
import ContentFooter from '../ContentFooter/ContentFooter';
const Content = () => {
  return (
    <View>
      <View style={styles.profilContainer}>
        <Image
          style={styles.profilPicture}
          source={{
            uri: 'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg',
          }}
        />
        <Text style={styles.profilTitle}>UserName</Text>
      </View>
      <View>
        <Image
          style={styles.postImage}
          source={require('../../assets/post.jpg')}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} size={25} name="cards-heart-outline" />
        <Icon style={styles.icon} size={25} name="comment-outline" />
        <Icon style={styles.iconSend} name="send-outline" />
      </View>
      <ContentFooter />
    </View>
  );
};

export default Content;
