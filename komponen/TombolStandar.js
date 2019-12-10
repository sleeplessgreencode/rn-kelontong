import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import TextStandar from "../komponen/TextStandar";
import Warna from "../konstan/Warna";

let Tombol = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  Tombol = TouchableNativeFeedback;
}

const TombolStandar = properti => {
  return (
    <Tombol
      style={{ ...tampilan.kontainerTombol, ...properti.style }}
      onPress={properti.tekanTombol}
    >
      <View style={tampilan.tombol}>
        <TextStandar style={tampilan.teksTombol}>
          {properti.children}
        </TextStandar>
      </View>
    </Tombol>
  );
};

const tampilan = StyleSheet.create({
  kontainerTombol: {
    borderRadius: 15
  },
  tombol: {
    padding: 10,
    margin: 10,
    shadowColor: "red",
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 10,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: Warna.utama
  },
  teksTombol: {
    fontFamily: "roboto-bold",
    fontSize: 18
  }
});

export default TombolStandar;
