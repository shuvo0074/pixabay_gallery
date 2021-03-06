import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import loginStyles from "../styles/loginStyles";
import { connect } from "react-redux";
import { addUser } from "../actions";
import store from '../store'
function Login (props) {

  const [name,setName]=useState('')

  function handleSubmit() {
    store.dispatch(addUser(name))
    props.navigation.navigate("AppStack")
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
                value={name}
                keyboardType="default"
                style={loginStyles.txtInput}
                onChangeText={setName}
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
  export default connect()(Login)