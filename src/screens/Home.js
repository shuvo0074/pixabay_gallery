/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import ImageBox from '../components/ImageBox'
import LargeCardSlider from '../components/LargeCardSlider';

const Home: () => React$Node = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <LargeCardSlider navigation={props.navigation}/>
        <ImageBox navigation={props.navigation}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default Home;
