import {
  Platform,
  Dimensions
} from "react-native";

import { 
  material,
  systemWeights
} from 'react-native-typography';
import { hidden } from "ansi-colors";

const window = Dimensions.get('window');
const { width } = Dimensions.get('window');


export default{
  cardTitleCenter: {
    ...material.titleObject,
    ...systemWeights.semibold,
    color: '#263238',
    textAlign: 'center'
  },
  largeSliderHolder: {
    marginTop: 10,
  },
  cardHeaderCenter: {
    width: window.width * 888 /1080,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  paddingView: {
    width: window.width * 60 /1080,
    height: window.width * 60 /1080
  },
  largeSliderItemHolder: {
    paddingLeft: window.width * 67 / 1080,
    paddingRight: window.width * 29 / 1080
  },
  largeSliderItem: {
    width: window.width * 888 / 1080,
    height: window.width * 1084 / 1080,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: window.width * 29 / 1080,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 5.25
  },
  largeSliderImg: {
    width: window.width * 888 / 1080,
    height: window.width * 888 / 1080,
  },
  imgBorderRadius: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden'
  },
  playlistTime: {
    backgroundColor: 'rgba(236,239,241,0.79)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: window.width * 48 / 1080,
    right: window.width * 48 / 1080
  },
  playlistTimeTxt: {
    ...material.captionObject,
    ...systemWeights.regular,
    color: '#546E7A',
    margin: 5
  },
  playlistInfo: {
    width: window.width * 888 / 1080,
    height: window.width * 196 / 1080,
    backgroundColor: '#FAFAFA',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: window.width * 48 / 1080
  },
  infoTxtHolder: {
    width: window.width * 650 / 1080,
  },
  infoLarge: {
    ...systemWeights.semibold,
    color: '#263238',
    fontSize: 16,
  },
  infoSmall: {
    ...material.body1Object,
    ...systemWeights.regular,
    color: '#90A4AE',
  },
  infoSmallBold: {
    ...material.body1Object,
    ...systemWeights.regular,
    color: '#455A64',
  },
  allBorderRadius: {
    borderRadius: 5,
    overflow: 'hidden'
  }
}