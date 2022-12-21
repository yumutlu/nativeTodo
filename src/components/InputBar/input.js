import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./input.styles";
const InputBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacakalar.."
        placeholderTextColor="#717476"
        onChangeText={props.onSearch}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBar;
