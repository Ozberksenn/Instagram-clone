import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: '#fe5aa0',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  imageBorder: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
  iconContainer: {
    borderWidth: 5,
    borderColor: '#fff',
    width: 30,
    height: 30,
    backgroundColor: '#3f729b',
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
