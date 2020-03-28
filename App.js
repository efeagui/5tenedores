import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/FireBase";

export default function App() {
  return <Navigation />;
}

//statusbar
export class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="blue"
          hidden={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00a680",
    justifyContent: "center",
    alignItems: "center"
  }
});
