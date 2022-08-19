import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ContentFooter.style';
function ContentFooter({comment, liked, userName, description}) {
  return (
    <View>
      <View style={styles.profileAndTitle}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image1}
            source={{uri: 'https://picsum.photos/id/239/200/300'}}
          />
          <Image
            style={styles.image2}
            source={{uri: 'https://picsum.photos/id/222/200/300'}}
          />
          <Image
            style={styles.image3}
            source={{uri: 'https://picsum.photos/id/230/200/300'}}
          />
        </View>
        <Text style={styles.title}>{liked} other people liked</Text>
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>{userName}</Text>
        <Text style={styles.commentText}>{description}</Text>
      </View>
      <View>
        <Text style={styles.seeComments}>{comment} yorumun tümünü gör </Text>
      </View>
    </View>
  );
}

export default ContentFooter;
