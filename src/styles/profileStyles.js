import {
  Platform,
  Dimensions
} from "react-native";

import { 
  material,
  systemWeights
} from 'react-native-typography';

const window = Dimensions.get('window');
const { width } = Dimensions.get('window');


export default{
  avatarHolder: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    margin: 20
  },
  basicInfo: {
    width: window.width,
    height: window.width/2.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: window.width/3.5,
    height: window.width/3.5,
    borderRadius: window.width/7,
  },
  profileName: {
    ...systemWeights.bold,
    color: '#263238',
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 5,
  },
  nameHolder: {
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  profileData: {
    width: window.width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  dataCount: {
    width: window.width/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countTitle: {
    ...systemWeights.regular,
    color: '#263238',
    fontSize: 16,
    textAlign: 'center',
  },
  countTxt: {
    ...systemWeights.semibold,
    color: '#263238',
    fontSize: 16,
    textAlign: 'center',
  }
} 