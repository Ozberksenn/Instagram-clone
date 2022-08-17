import React from 'react';
import {View, FlatList} from 'react-native';
import data from '../../data.json';
import Content from '../Content/Content';
function ContentList() {
  console.log(data);
  return (
    <View>
      <FlatList data={data} renderItem={item => <Content data={item} />} />
    </View>
  );
}

export default ContentList;
