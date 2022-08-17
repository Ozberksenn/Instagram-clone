import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  image1: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  image2: {
    marginLeft: 15,
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  image3: {
    marginLeft: 30,
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  title: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  profileAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
  },
  commentTitle: {
    marginTop: 5,
    marginLeft: 10,
    color: '#000',
    fontWeight: '800',
    fontSize: 14,
  },
  commentText: {
    marginTop: 5,
    color: '#000',
    fontSize: 14,
  },
});
