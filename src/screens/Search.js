import React, {useState} from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View,BackHandler,ScrollView } from "react-native";
import styles from "../styles/styles";
import searchStyles from "../styles/searchStyles";

import ImageBox from '../components/ImageBox'

const window = Dimensions.get('window');

export default function Search () {

  const [searchTerm,setSearchTerm]=useState('')
    return (
        <View style={styles.container}>

          {/*SearchBar starts*/}
          <View style={searchStyles.boxHolder}>
            <View style={searchStyles.searchBox}>
              <TextInput
                style={searchStyles.searchBoxInput}
                placeholderTextColor="#757575"
                placeholder="Search"
                underlineColorAndroid="transparent"
                onChangeText={setSearchTerm}
                value={searchTerm}
              />
            </View>
          </View>
          {/*SearchBar ends*/}

          {
            searchTerm.length>0?<ImageBox/>:<View/>
          }

          {searchTerm.length<=0 && (
            <View style={searchStyles.searchDialogue}>
                <Image
                  source={require("../res/img/hobbies-and-free-time.png")}
                  style={searchStyles.searchBoxIcon}
                />
              <Text style={searchStyles.searchDialogueTitle}>
                Search Imagine Radio
              </Text>
              <Text style={searchStyles.searchDialogueTxt}>
                Find your favourite songs, artists,
                {"\n"}
                albums and playlists
              </Text>
            </View>
          )}

        </View>
    );
  }

