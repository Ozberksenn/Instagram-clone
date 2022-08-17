import React from 'react';
import {ScrollView} from 'react-native';
import Stories from '../Stories/Stories';
function StoryList() {
  return (
    <ScrollView horizontal={true}>
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
    </ScrollView>
  );
}

export default StoryList;
