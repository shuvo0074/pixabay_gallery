import { Platform, Dimensions, StatusBar } from "react-native";
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get("window");

const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
  ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
  : false;

const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
});

export default{
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    paddingTop: Platform.OS === "ios" ? StatusBarHeight - 10 : 0,
    //minHeight: Platform.OS === "ios" ? window.height : window.height - StatusBarHeight,
    height: 'auto'
  },
  content: {
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  }
}