
import React, { useState,useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View,ActivityIndicator } from "react-native";
import cardStyles from "../styles/cardStyles";
import imageBoxStyles from "../styles/imageBoxStyles";
import FastImage from "react-native-fast-image";
import FetchService from '../services/FetchService'



export default function ImageBox (props) {
  const [hits,setHits]=useState([])
  useEffect(()=>{

    // For more params visit https://pixabay.com/api/docs
    let params=["orientation=vertical","editors_choice=true"]
    
    // For search
    if(props.searchTerm){
      params.push("q="+props.searchTerm.replace(" ","+"))
    }

    // For profile and others
    if(props.category){
      params.push("category="+props.category)
    }

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
          {props.category?props.category:"Search Results for "+props.searchTerm}
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
                onPress={() => props.navigation.navigate('ImageDetail',{id:rowData.id})}
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
  // Loading
  return (
    <View>
      <ActivityIndicator/>
    </View>
  )
}