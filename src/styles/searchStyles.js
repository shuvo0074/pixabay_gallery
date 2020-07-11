import {
  Platform,
  Dimensions
} from "react-native";

import { 
  material,
  systemWeights
} from 'react-native-typography';

const window = Dimensions.get('window');


export default{
  boxHolder: {
    width: window.width,
    height: window.width/5.5,
    backgroundColor: '#eeeeee',
    overflow: 'visible',
    paddingBottom: 20,
    zIndex: 2
  },
  searchBox: {
    height: window.width/8.5,
    width: window.width - 20,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
  },
  searchBoxInput: {
    ...material.subheadingObject,
    ...systemWeights.regular,
    color: '#212121',
    width: window.width - 85,
  },
  searchBoxIcon: {
    height:window.height-290,
    width:window.width-10,
    fontSize: 30,
    color: '#9E9E9E'
  },
  searchDialogue: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 120
  },
  searchDialogueTitle: {
    ...material.titleObject,
    ...systemWeights.semibold,
    color: '#616161',
    marginBottom: 20,
    textAlign: 'center'
  },
  searchDialogueTxt: {
    ...systemWeights.light,
    color: "#616161",
    textAlign: "center",
    fontSize: 14
  }
}
