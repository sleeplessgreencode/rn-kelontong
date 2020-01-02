import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Warna from "../konstan/Warna";

const TextInputStandar = properti => {
  return (
    <View style={tampilan.areaInput}>
      <Text style={tampilan.label}>{properti.label}</Text>
      <TextInput {...properti} style={tampilan.input} />
    </View>
  );
};

const tampilan = StyleSheet.create({
  areaInput: {
    margin: 10,
    padding: 15
  },
  label: {
    fontFamily: "roboto-regular",
    fontSize: 18,
    color: Warna.utama,
    marginVertical: 0
  },
  input: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: Warna.putih,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Warna.utama,
    borderBottomWidth: 1
  }
});

export default TextInputStandar;
