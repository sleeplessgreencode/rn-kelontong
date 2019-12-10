import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TombolStandar from "../komponen/TombolStandar";
import TextStandar from "../komponen/TextStandar";

const LayarBarang = props => {
  return (
    <View style={tampilan.layar}>
      <View style={tampilan.tengah}>
        <TextStandar>Layar Barang</TextStandar>
        <TombolStandar
          tekanTombol={() => {
            props.navigation.navigate("EditBarang");
          }}
        >
          <TextStandar>Tambahkan Barang</TextStandar>
        </TombolStandar>
      </View>
    </View>
  );
};

LayarBarang.navigationOptions = {
  title: "Daftar Barang"
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

export default LayarBarang;
