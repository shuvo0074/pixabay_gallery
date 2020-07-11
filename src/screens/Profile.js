import React, { useEffect, useState } from "react";
import { ScrollView, Image, Text, View } from "react-native";
import styles from "../styles/styles";
import profileStyles from "../styles/profileStyles";
import { connect } from "react-redux";
import store from '../store'
import ImageBox from '../components/ImageBox'

function Profile (props) {

  const [name,setName]=useState('')
  useEffect(()=>{
    setName(store.getState().userName)
  })

    return (
        <View style={styles.container}>
          <View style={styles.content}>
            {/*  Profile info starts  */}
            <View style={profileStyles.profileInfo}>
              <View style={profileStyles.basicInfo}>
                <View style={profileStyles.avatarHolder}>
                  <Image
                    style={profileStyles.avatar}
                    source={require("../res/img/ir_avatar_male.png")}
                  />
                </View>
                <View style={profileStyles.nameHolder}>
                  <Text style={profileStyles.profileName}>
                    {name}
                  </Text>
                </View>
              </View>
              {/*  Profile info ends  */}

              {/*  profile data starts  */}
              <View style={profileStyles.profileData}>
                <View style={profileStyles.dataCount}>
                  <Text style={profileStyles.countTitle}>
                    You
                    {"'"}
                    ve Liked
                  </Text>
                  <Text style={profileStyles.countTxt}>
                    11 Photos
                  </Text>
                </View>
                <View style={profileStyles.dataCount}>
                  <Text style={profileStyles.countTitle}>
                    You
                    {"'"}
                    re following
                  </Text>
                  <Text style={profileStyles.countTxt}>
                    34 people
                  </Text>
                </View>
              </View>
              {/*  profile data ends  */}
              <ScrollView>
              <ImageBox category="sports" navigation={props.navigation}/>
              <View
              style={{height:100}}
              />
              </ScrollView>

            </View>
          </View>
        </View>
    );
  }

  export default connect()(Profile)