
import React,{useEffect,useState} from "react";
import { FlatList,  Text, TouchableOpacity, View , ActivityIndicator} from "react-native";
import cardStyles from "../styles/cardStyles";
import FetchService from '../services/FetchService'
import FastImage from "react-native-fast-image";


export default function LargeCardSlider (props) {
  const [hits,setHits]=useState([])
  const [category,setCategory]=useState('music')
  useEffect(()=>{
    let params=["orientation=vertical","category="+category,"editors_choice=true"]
    FetchService("GET",params)
    .then((response)=>{
      setHits(response.hits)
    })

  },[props])
    if (hits.length>0)
    return(
    <View style={cardStyles.largeSliderHolder}>
      <View style={cardStyles.cardHeaderCenter}>
      <View style={cardStyles.paddingView} />
        <Text style={cardStyles.cardTitleCenter}>{category}</Text>
      <View style={cardStyles.paddingView} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hits}
        contentContainerStyle={cardStyles.largeSliderItemHolder}
        renderItem={({ item: rowData }) => {
          return (
            <View style={cardStyles.largeSliderItem}>
              <TouchableOpacity onPress={() => props.navigation.navigate('ImageDetail',{id:rowData.id})}>
                <View style={cardStyles.iosBorderRadius}>
                  <FastImage
                    source={{uri:rowData.largeImageURL}}
                    style={cardStyles.largeSliderImg}
                    resizeMethod='resize'
                  />
                </View>
              </TouchableOpacity>
              {
                (rowData.likes!= 0)?
                <View style={cardStyles.playlistTime}>
                  <Text style={cardStyles.playlistTimeTxt}>
                  {"\u2764"} {rowData.likes}
                  </Text>
                </View>:<View/>
              }
              <View style={cardStyles.playlistInfo}>
                <TouchableOpacity
                  style={cardStyles.infoTxtHolder}
                  onPress={() => props.navigation.navigate('ImageDetail',{id:rowData.id})}
                >
                  <Text numberOfLines={1} style={cardStyles.infoLarge}>
                  <Text numberOfLines={1} style={cardStyles.infoSmall}># </Text>

                    {rowData.tags}
                  </Text>
                    <Text numberOfLines={1} style={cardStyles.infoSmall}>
                    By{" "}
                    <Text style={cardStyles.infoSmallBold}>
                      {rowData.user}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor = {item => item.id}
      />
    </View>
    )
    else return(
      <ActivityIndicator/>
    )
}