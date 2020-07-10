import {
  Dimensions
} from "react-native";

const window = Dimensions.get('window');

export default {
  imageBox: {
    flex: 5,
    marginTop: 10
  },
  imageHeader: {
    width: window.width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  imageItemHolder: {
    width: window.width,
    alignSelf: 'center'
  },
  imageItems: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 5,
    marginLeft: (window.width*54/1080)/2,
    marginRight: (window.width*54/1080)/2,
    marginTop: (window.width*54/1080)/3,
    marginBottom: (window.width*54/1080)*2/3
  },
  imageImg: {
    width: window.width*420/1080,
    height: window.width*420/1080
  }
};
