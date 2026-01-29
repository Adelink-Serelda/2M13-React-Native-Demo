import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { search } from "./src/api";
import Movie from "./src/Movie";

export default function Main({ movies = [], onFetchMovies }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={(text) => onFetchMovies(text)}
      />
      <ScrollView>
        {movies.map((data) => (
          <Movie data={data} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
    padding: 20,
    marginTop: 20,
  },
  input: {
    backgroundColor: "grey",
    padding: 20,
    marginBottom: 20,
  },
});
