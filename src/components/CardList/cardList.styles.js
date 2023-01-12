import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#7EA453",
    padding: 15,

    margin: 5,
    borderRadius: 10,
  },
  text: {
    color: "#F1F6ED",
  },
  after_completed_container: {
    backgroundColor: "#393e46",
    padding: 7,
    marginHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#a0a0a0",
    borderRadius: 8,
  },
  before_completed_text: {
    color: "#f0f0f0",
  },
  after_completed_text: {
    color: "red",
    textDecorationLine: "line-through",
  },
});
