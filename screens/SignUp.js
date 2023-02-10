import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [isFocused6, setIsFocused6] = useState(false);

  const [first_name, set_FirstName] = useState("");
  const [last_name, set_LastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    setIsLoading(true);
    fetch(
      "https://phpwebdevelopmentservices.com/development/test/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          params: {
            email,
            password,
            password_confirmation,
            phone,
            first_name,
            last_name,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.error) {
          Alert.alert("Error", data.error.message);
        } else {
          Alert.alert(data.result.mail_message);
        }
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

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
            Sign up
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
      <Text style={style.title}>Welcome To Golugg</Text>

      <View style={style.nameRow}>
        <Image
          source={require("../assets/images/icon-34.png")}
          style={style.img}
          //   style={{ width: 30, height: 30 }}
        />
        <View
          style={{
            // flexDirection: "row",
            borderBottomWidth: 2,
            borderBottomColor: isFocused1 ? "#006eab" : "#ddd",
            width: "39%",
            marginLeft: 20,
          }}
        >
          <TextInput
            style={style.inputBox}
            placeholder="First Name"
            onFocus={() => setIsFocused1(true)}
            onBlur={() => setIsFocused1(false)}
            value={first_name}
            onChangeText={(text) => set_FirstName(text)}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: isFocused2 ? "#006eab" : "#ddd",
            width: "38%",
            marginLeft: 33,
          }}
        >
          <TextInput
            style={style.inputBox}
            placeholder="Last Name"
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            value={last_name}
            onChangeText={(text) => set_LastName(text)}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 25,
          alignItems: "center",
          marginHorizontal: 22,
        }}
      >
        <Image
          source={require("../assets/images/icon-33.png")}
          style={style.img}
        />
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: isFocused3 ? "#006eab" : "#ddd",
            width: "86%",
            marginLeft: 20,
          }}
        >
          <TextInput
            style={style.inputBox}
            placeholder="Email (Optional)"
            onFocus={() => setIsFocused3(true)}
            onBlur={() => setIsFocused3(false)}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={phone}
            keyboardType="number-pad"
            onChangeText={(text) => setPhone(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginBottom: 30,
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
            borderBottomColor: isFocused6 ? "#006eab" : "#ddd",
            width: "86%",
            marginLeft: 20,
          }}
        >
          <TextInput
            style={style.inputBox}
            placeholder="Confirm Password"
            onFocus={() => setIsFocused6(true)}
            onBlur={() => setIsFocused6(false)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={password_confirmation}
            onChangeText={(text) => setPassword_confirmation(text)}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 22,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
          }}
        >
          By Clicking an option below, I agree to the{" "}
          <Text style={style.red}>Terms of Use</Text> and have read the{" "}
          <Text style={style.red}>Privacy Policy</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={style.button}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={style.lastText}>
          Already have an account on Golugg?{" "}
          <Text style={style.red}>Login</Text>
        </Text>
      </TouchableOpacity>

      {isLoading && <Text>Loading...</Text>}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 25,
    marginHorizontal: 22,
  },
  nameRow: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 22,
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
  },
  red: {
    color: "#cd2026",
  },
});
export default SignUp;
