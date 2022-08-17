import React from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import data from '../../data.json';
import Stories from '../Stories/Stories';
function StoryList() {
  console.log(data);
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        renderItem={item => <Stories data={item} />}
      />
    </View>
  );
}

export default StoryList;
