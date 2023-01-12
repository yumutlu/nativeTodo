import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CardList from "./src/components/CardList";
import InputBar from "./src/components/InputBar";

export default function App() {
  const [list, setList] = useState([]);
  const [toDo, setToDo] = useState("");
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const addToDo = () => {
    setList([
      ...list,
      {
        action: toDo,
        id: Math.random() + Date.now(),
        isDone: false,
      },
    ]);
    setToDo("");
    setIsActiveBtn(false);
  };

  completedToDo = (id) => {
    const newList = list.map((element) => {
      if (element.id == id) {
        element.isDone = !element.isDone;
      }
      return element;
    });
    setList(newList);
  };

  const removeToDo = (id) => {
    const copyList = list.filter((element) => element.id !== id);
    setList(copyList);
  };
  const filterList = list.filter((element) => element.isDone);

  const renderCards = ({ item }) => (
    <CardList
      data={item}
      completedToDo={completedToDo}
      removeToDo={removeToDo}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.title_container}>
          <Text style={styles.title}>Yapılacaklar</Text>
          <Text style={styles.title}>{filterList.length}</Text>
        </View>

        <FlatList data={list} renderItem={renderCards} />
      </View>

      <InputBar
        toDo={toDo}
        setToDo={setToDo}
        addToDo={addToDo}
        isActiveBtn={isActiveBtn}
        setIsActiveBtn={setIsActiveBtn}
      />

      <StatusBar style="light" />
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
