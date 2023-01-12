import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./cardList.styles";
const CardList = ({ data, completedToDo, removeToDo }) => {
  console.log(data.action, "dddd");
  return (
    <TouchableOpacity
      onPress={() => {
        completedToDo(data.id);
      }}
      onLongPress={() => {
        removeToDo(data.id);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{data.action}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CardList;
