import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {},
  profilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profilPicture: {
    marginLeft: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profilTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  postImage: {
    marginTop: 5,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
  },
  iconContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 25,
    color: '#000',
  },
  iconSend: {
    marginHorizontal: 10,
    fontSize: 25,
    color: '#000',
    transform: [{rotate: '300deg'}],
  },
});
