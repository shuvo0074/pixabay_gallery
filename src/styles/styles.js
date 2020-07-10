import { Platform, Dimensions, StatusBar } from "react-native";

const window = Dimensions.get("window");

const HEADER_MAX_HEIGHT = 400;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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
  }
}