import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import Warna from "../konstan/Warna";

const TextStandar = properti => {
  return (
    <Text style={{ ...tampilan.textStandar, ...properti.style }}>
      {properti.children}
    </Text>
  );
};

const tampilan = StyleSheet.create({
  textStandar: {
    fontFamily: "roboto-regular",
    color: Warna.putih
  }
});

export default TextStandar;
