import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img2} source={require("./assets/header.png")}/>
      </View>
      <View styles={styles.imgOut}>
        <Image style={styles.img} source={require("./assets/google.png")}/>
      </View>
      <View style={styles.inpOut}>
        <TextInput style={styles.inp} placeholder="Search or type URL"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  imgOut: {
    width: "100%",
    margin: "10px",
  },
  img: {
    margin: "auto",
    width: "200px",
    height: "65px"
  },
  header: {
    position: "fixed",
    top: 0,
    right: 0
  },
  inpOut: {
    width: "calc(100% - 40px)",
    margin: "10px auto",
    display: "flex",
    alignItems: "center"
  },
  inp: {
    padding: "10px 20px",
    width: "100%",
    border: "2px solid #eee",
    margin: "30px auto",
    color: "#bbb"
  }

});
