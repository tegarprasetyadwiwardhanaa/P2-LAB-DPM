import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Soal2() {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "white",
  },
});
