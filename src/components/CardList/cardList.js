import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./cardList.styles";
const CardList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

export default CardList;
