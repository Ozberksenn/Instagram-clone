import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ContentFooter.style';
function ContentFooter({userName, description}) {
  return (
    <View>
      <View style={styles.profileAndTitle}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image1}
            source={require('../../assets/post.jpg')}
          />
          <Image
            style={styles.image2}
            source={require('../../assets/post.jpg')}
          />
          <Image
            style={styles.image3}
            source={require('../../assets/post.jpg')}
          />
        </View>
        <Text style={styles.title}>other people liked</Text>
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>{userName}</Text>
        <Text style={styles.commentText}>{description}</Text>
      </View>
    </View>
  );
}

export default ContentFooter;
