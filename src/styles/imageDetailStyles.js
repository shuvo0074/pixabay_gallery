import {
  Dimensions
} from "react-native";

import { 
  material,
  systemWeights
} from 'react-native-typography';

const window = Dimensions.get('window');

export default {
  backBtn:{
    margin:10,
    width:window.width/4,
    borderRadius:8,
    backgroundColor:'#263238',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'row',
    borderColor:'black',
    borderWidth:2
},
backTxt:{
  ...material.titleObject,
  ...systemWeights.semibold,
  color: 'white',
  textAlign: 'center',
  fontWeight:'bold'
},
tagTxt:{
  marginTop:10,
  ...material.titleObject,
  ...systemWeights.semibold,
  color: '#263238',
  textAlign: 'center',
  marginBottom: 20
},
infoSmall:{
  ...material.body1Object,
  ...systemWeights.regular,
  color: '#90A4AE',
},
infoLarge:{
  marginTop:20,
  ...material.titleObject,
  ...systemWeights.semibold,
  color: '#263238',
  textAlign: 'center'
},
infoMed:{
  marginLeft:30,
  ...material.captionObject,
  ...systemWeights.regular,
  color: '#546E7A',
  margin: 5
},
detailImg:{
  width: window.width-20,
  height: window.width,
  borderRadius: 15,
  margin:10
},
likeContainer:{
  flexDirection:"row",
  justifyContent:"space-between"
}


}