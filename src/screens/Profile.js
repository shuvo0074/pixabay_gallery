import React from "react";
import { ScrollView, Image, Text, View } from "react-native";
import styles from "../styles/styles";
import profileStyles from "../styles/profileStyles";

import ImageBox from '../components/ImageBox'

export default function Profile () {

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
                    // for female use "avatarFemale"
                  />
                </View>
                <View style={profileStyles.nameHolder}>
                  <Text style={profileStyles.profileName}>
                    fname
                  </Text>
                  <Text style={profileStyles.profileName}>
                    lname
                  </Text>
                </View>
              </View>
              {/*  basic info ends  */}

              <View style={profileStyles.profileData}>
                <View style={profileStyles.dataCount}>
                  <Text style={profileStyles.countTitle}>
                    You
                    {"'"}
                    ve Liked
                  </Text>
                  <Text style={profileStyles.countTxt}>
                    4224 Songs
                  </Text>
                </View>
                <View style={profileStyles.dataCount}>
                  <Text style={profileStyles.countTitle}>
                    You
                    {"'"}
                    re following
                  </Text>
                  <Text style={profileStyles.countTxt}>
                    32345 Artists
                  </Text>
                </View>
              </View>
              {/*  profile data ends  */}
              <ScrollView>
              <ImageBox/>
              <View
              style={{height:100}}
              />
              </ScrollView>

            </View>
          </View>
        </View>
    );
  }
