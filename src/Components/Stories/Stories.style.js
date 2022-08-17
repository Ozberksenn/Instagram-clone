import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
  },
  iconContainer: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: '#fff',
  },
});
