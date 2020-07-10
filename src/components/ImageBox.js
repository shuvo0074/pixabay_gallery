
import React, { useState,useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View,ActivityIndicator } from "react-native";
import cardStyles from "../styles/cardStyles";
import imageBoxStyles from "../styles/imageBoxStyles";
import FastImage from "react-native-fast-image";
import FetchService from '../services/FetchService'



export default function ImageBox (props) {
  const [hits,setHits]=useState([])
  const [category,setCategory]=useState('Nature')
  useEffect(()=>{
    let params=["orientation=vertical","category="+category,"editors_choice=true"]
    FetchService("GET",params)
    .then((response)=>{
      setHits(response.hits)
    })

  },[props])
  if(hits.length>0)
  return(
    <View style={imageBoxStyles.imageBox}>
      <View style={imageBoxStyles.imageHeader}>
        <Text style={cardStyles.cardTitleCenter}>
          {category}
        </Text>
      </View>
      <FlatList
        data={hits}
        numColumns={2}
        contentContainerStyle={imageBoxStyles.imageItemHolder}
        columnWrapperStyle={{ justifyContent: "center" }}
        renderItem={({ item: rowData }) => {
          return (
            <View style={imageBoxStyles.imageItems}>
              <TouchableOpacity
                style={cardStyles.allBorderRadius}
                onPress={() => console.log(rowData)}
              >
                <FastImage
                  source={{
                    uri: rowData.largeImageURL,
                    priority: FastImage.priority.normal
                  }}
                  style={imageBoxStyles.imageImg}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor = {item => item.id}
      />
    </View>
  )
  return (
    <View>
      <ActivityIndicator/>
    </View>
  )
}