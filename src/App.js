import React from 'react';
import {SafeAreaView, View, ScrollView, Image} from 'react-native';

import Header from './Components/Header/Header';
import StoryList from './Components/StoryList/StoryList';

import styles from './App.style';
import ContentList from './Components/ContentList/ContentList';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <StoryList />
        <View style={styles.line}></View>

        <ContentList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
