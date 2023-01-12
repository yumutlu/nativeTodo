import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./input.styles";
const InputBar = ({ toDo, setToDo, addToDo, isActiveBtn, setIsActiveBtn }) => {
  const changeText = (text) => {
    setToDo(text);
    text !== "" ? setIsActiveBtn(true) : setIsActiveBtn(false);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacaklar..."
        cursorColor="#a0a0a0"
        selectionColor="#c0c0c0"
        onChangeText={changeText}
        value={toDo}
      />
      <TouchableOpacity
        onPress={addToDo}
        style={isActiveBtn ? styles.active_button : styles.button}
      >
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBar;
