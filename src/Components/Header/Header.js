import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Vector-Icons paketini import ediyoruz.
import styles from './Header.style'; // style dosyasını çağırıyoruz.
function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/instagram-logo.png')}
        />
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="plus-box-outline" />
          <Icon style={styles.icon} name="cards-heart-outline" />
          <Icon style={styles.iconSend} name="send-outline" />
        </View>
      </View>
    </View>
  );
}

export default Header;
