import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import Header from './Components/Header/Header';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
