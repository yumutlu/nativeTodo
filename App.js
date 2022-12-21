import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CardList from "./src/components/CardList";
import InputBar from "./src/components/InputBar";

export default function App() {
  const [todos, setTodos] = useState("lis,");
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.title_container}>
          <Text style={styles.title}>Yapılacaklar</Text>
          <Text style={styles.title}>0</Text>
        </View>
        <CardList name="çöpler atılcacak" />
        <CardList name="ev temizlenecek" />
      </View>

      <InputBar />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",

    backgroundColor: "#112027",
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: "#FFA500",
  },
});
