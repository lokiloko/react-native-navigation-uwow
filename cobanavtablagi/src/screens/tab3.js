import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const tab3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        THIS IS THE THIRD SCREEN!
      </Text>
    </View>
  );
}

export default tab3;
