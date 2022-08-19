import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Content.style';
import ContentFooter from '../ContentFooter/ContentFooter';
const Content = ({data}) => {
  return (
    <View>
      <View style={styles.profilContainer}>
        <View style={styles.profilAndUser}>
          <Image
            style={styles.profilPicture}
            source={{
              uri: data.item.profilePicture,
            }}
          />
          <Text style={styles.profilTitle}>{data.item.userName}</Text>
        </View>
        <View>
          <Icon style={styles.dotIcon} size={25} name="dots-horizontal" />
        </View>
      </View>
      <View>
        <Image
          style={styles.postImage}
          source={{
            uri: data.item.posts[0].image,
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} size={25} name="cards-heart-outline" />
        <Icon style={styles.icon} size={25} name="comment-outline" />
        <Icon style={styles.iconSend} name="send-outline" />
      </View>
      <ContentFooter
        comment={data.item.posts[0].comment}
        liked={data.item.posts[0].liked}
        userName={data.item.userName}
        description={data.item.posts[0].description}
      />
    </View>
  );
};

export default Content;
