import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const OtpScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Nav section  */}
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 22,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/images/icon-35.png")}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
            }}
          >
            Login
          </Text>
        </View>
      </View>
      {/* Horizontal Separator  */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          marginTop: 20,
          elevation: 5,
        }}
      ></View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginHorizontal: 22,
          marginTop: 20,
        }}
      >
        OTP verification
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 22,
          marginTop: 10,
        }}
      >
        Please enter the 6 digit code sent to you at{"\n"} +91 9876543210
      </Text>
      {/* Boxes  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 22,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={true}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={true}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={true}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={true}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={true}
          />
        </View>
        <View style={style.otpBox}>
          <TextInput
            style={style.otpText}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={true}
          />
        </View>
      </View>
      {/* Button  */}
      <View
        style={{
          backgroundColor: "blue",
          height: 50,
          marginHorizontal: 22,
          borderRadius: 7,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign up
        </Text>
      </View>
      {/* bottom Text  */}
      <TouchableOpacity>
        <View style={style.lastBox}>
          <Text style={style.lastText}>
            Did not received verification code yet{"\n "}
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../assets/images/icon-48.png")}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{ color: "#cd2026", marginLeft: 5, fontWeight: "600" }}
              >
                Resend Code
              </Text>
            </View>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;
const style = StyleSheet.create({
  lastText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",

    // paddingVertical: 10,
  },
  lastBox: {
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ddd",
    height: 80,
    marginHorizontal: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  otpText: {
    fontSize: 25,
    color: "#000",
    textAlign: "center",
    justifyContent: "center",
  },
  otpBox: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ddd",
    width: 40,
    height: 40,
  },
});
