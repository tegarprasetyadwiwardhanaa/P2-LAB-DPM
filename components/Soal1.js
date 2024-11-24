import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Soal1({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
