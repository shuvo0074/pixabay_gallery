import React, {useState} from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View,BackHandler,ScrollView } from "react-native";
import styles from "../styles/styles";
import searchStyles from "../styles/searchStyles";

import ImageBox from '../components/ImageBox'

const window = Dimensions.get('window');

export default function Search (props) {

  const [searchTerm,setSearchTerm]=useState('')
    return (
        <View style={styles.container}>

          {/*SearchBar starts*/}
          <View style={searchStyles.boxHolder}>
            <View style={searchStyles.searchBox}>
              <TextInput
                style={searchStyles.searchBoxInput}
                placeholderTextColor="#757575"
                placeholder="Search photos"
                underlineColorAndroid="transparent"
                onChangeText={setSearchTerm}
                value={searchTerm}
              />
            </View>
          </View>
          {/*SearchBar ends*/}

          {
            searchTerm.length>0?<ImageBox searchTerm={searchTerm} navigation={props.navigation}/>:<View/>
          }

          {searchTerm.length<=0 && (
            <View style={searchStyles.searchDialogue}>
                <Image
                  source={require("../res/img/hobbies-and-free-time.png")}
                  style={searchStyles.searchBoxIcon}
                  resizeMethod='resize'
                />
                {/*Search background*/}
            </View>
          )}

        </View>
    );
  }

