import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  line: {
    marginVertical: 15,
    width: Dimensions.get('window').width,
    borderWidth: 0.2,
    borderColor: 'gray',
  },
});
