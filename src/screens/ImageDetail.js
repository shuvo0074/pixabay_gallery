import React, { useEffect, useState } from "react";

import { View,Image,Text,TouchableOpacity } from "react-native";
import FetchService from "../services/FetchService";

import imageDetailStyles from "../styles/imageDetailStyles";

export default function ImageDetail(props){
    const [data,setData]=useState({})
    useEffect(()=>{
        FetchService("GET",["id="+props.navigation.state.params.id])
        .then((response)=>{
            setData(response.hits[0])
        })
    },[])
    return(
        <View>
            <TouchableOpacity
            style={imageDetailStyles.backBtn}
            onPress={()=>props.navigation.goBack()}
            >
                <Text
                style={imageDetailStyles.backTxt}
                >
                    Back
                </Text>
            </TouchableOpacity>
            <Text
            style={imageDetailStyles.tagTxt}
            >

                <Text
                style={imageDetailStyles.infoSmall}
                ># </Text>
                {data.tags}
            </Text>
            <Image
                style={imageDetailStyles.detailImg}
                source={{uri: data.largeImageURL}}
                />
            <Text
            style={imageDetailStyles.infoLarge}
            >
                <Text
                style={imageDetailStyles.infoSmall}
                >
                    By
                </Text>
                {data.user}
            </Text>
            <View
            style={imageDetailStyles.likeContainer}
            >
                <Text
                style={imageDetailStyles.infoMed}
                >
                {"\u2764"} {data.likes}
                </Text>
                <Text
                style={[imageDetailStyles.infoMed,{marginRight:30}]}
                >
                    {"\uD83D\uDCAC"} {data.comments} 
                </Text>
            </View>
            
        </View>
    )
}