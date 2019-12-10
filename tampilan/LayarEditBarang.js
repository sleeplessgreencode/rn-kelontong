import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TextStandar from "../komponen/TextStandar";

const LayarEditBarang = props => {
  return (
    <View style={tampilan.layar}>
      <View style={tampilan.tengah}>
        <TextStandar>Layar Edit Barang</TextStandar>
      </View>
    </View>
  );
};

LayarEditBarang.navigationOptions = {
  title: "Edit Barang"
};

const tampilan = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: Warna.abuUtama
  },
  tengah: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LayarEditBarang;
