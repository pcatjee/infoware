import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [isFocused6, setIsFocused6] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={style.container}>
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
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require("../assets/images/icon-35.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
      <Text style={style.title}>Welcome Back!</Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
          marginHorizontal: 22,
        }}
      >
        <Image
          source={require("../assets/images/icon-32.png")}
          style={style.img}
        />
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: isFocused4 ? "#006eab" : "#ddd",
            width: "86%",
            marginLeft: 20,
          }}
        >
          <TextInput
            style={style.inputBox}
            placeholder="Phone Number"
            onFocus={() => setIsFocused4(true)}
            onBlur={() => setIsFocused4(false)}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
          marginHorizontal: 22,
        }}
      >
        <Image
          source={require("../assets/images/icon-31.png")}
          style={style.img}
        />
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: isFocused5 ? "#006eab" : "#ddd",
            width: "86%",
            marginLeft: 20,
          }}
        >
          <TextInput
            style={style.inputBox}
            placeholder="Password"
            onFocus={() => setIsFocused5(true)}
            onBlur={() => setIsFocused5(false)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: 20,
          marginHorizontal: 22,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#cd2026",
            fontWeight: "600",
          }}
        >
          Forgot Password?
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={style.button}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={style.lastText}>
          Don't have an account on Golugg? <Text style={style.red}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 25,
    marginHorizontal: 22,
  },
  nameRow: {
    flexDirection: "row",
    paddingVertical: 10,
    marginTop: 30,
    alignItems: "center",
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#006eab",
    borderRadius: 4,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 30,
    paddingVertical: 10,
    marginHorizontal: 22,
  },
  lastText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ddd",
    height: 80,
    paddingVertical: 25,
    marginHorizontal: 22,
  },
  inputBox: {
    fontSize: 18,
    paddingBottom: 5,
  },
  red: {
    color: "#cd2026",
  },
});
export default Login;
