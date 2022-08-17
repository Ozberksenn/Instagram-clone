import React from 'react';
import {SafeAreaView, View, ScrollView, Image} from 'react-native';

import Header from './Components/Header/Header';
import StoryList from './Components/StoryList/StoryList';
import Content from './Components/Content/Content';
import styles from './App.style';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <StoryList />
        <View style={styles.line}></View>
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
