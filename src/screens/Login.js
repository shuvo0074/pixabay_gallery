import React from "react";
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import loginStyles from "../styles/loginStyles";

export default function Login ({navigation}) {

  function handleSubmit() {
    navigation.navigate("AppStack")
  }
    return (
      <View style={loginStyles.loginCont}>
        {/* background image starts */}
        <Image
          style={loginStyles.loginBG}
          source={require("../res/img/pixabay_logo.png")}
        />
        {/* background image ends */}


        <View style={loginStyles.loginContent}>

          {/* title and input starts */}
          <View style={loginStyles.loginEmailTop}>
            <KeyboardAvoidingView>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#212121"
                placeholder="Your name"
                autoFocus={true}
                keyboardType="default"
                style={loginStyles.txtInput}
                onChangeText={email => console.log(email)}
                blurOnSubmit={false}
                />
            </KeyboardAvoidingView>
          </View>
          {/* title and input ends */}

          <View style={loginStyles.loginEmailBottom}>
            {/* login button */}
            <TouchableOpacity
              style={[loginStyles.loginBtn,loginStyles.darkBlueBtn]}
              onPress={() => {
                handleSubmit();
              }}
            >
                <Text style={loginStyles.darkBlueBtnTxt}>Login</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    );
  }
