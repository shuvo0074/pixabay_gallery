import React from 'react';
import {
  StatusBar,
  ScrollView
} from 'react-native';

import styles from "../styles/styles";

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
        <ImageBox category="nature" navigation={props.navigation}/>
      </ScrollView>
    </>
  );
};

export default Home;
