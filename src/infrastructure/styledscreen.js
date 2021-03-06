import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const StyledView = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "purple",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
