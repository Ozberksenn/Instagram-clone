import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {},
  profilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  profilPicture: {
    marginLeft: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profilAndUser: {flexDirection: 'row', alignItems: 'center'},
  profilTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dotIcon: {
    color: '#000',
    right: 5,
  },
  postImage: {
    marginTop: 5,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.4,
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
