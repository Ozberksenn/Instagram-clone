import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 25,
    fontSize: 25,
    color: '#000',
  },
  iconSend: {
    marginRight: 20,
    fontSize: 25,
    color: '#000',
    transform: [{rotate: '300deg'}],
  },
  logo: {
    width: Dimensions.get('window').width / 2.7,
    height: 100,
    resizeMode: 'contain',
  },
});
