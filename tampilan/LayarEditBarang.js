import React from "react";
import { View, StyleSheet } from "react-native";

import TextInputStandar from "../komponen/TextInputStandar";
import TombolStandar from "../komponen/TombolStandar";

const LayarEditBarang = properti => {
  return (
    <View style={tampilan.layar}>
      <TextInputStandar label="Nama Barang" />
      <TextInputStandar label="Kategori Barang" />
      <TextInputStandar label="Kategori Barang" />
      <View style={tampilan.kontainerTombol}>
        <TombolStandar tekanTombol={() => {}} style={tampilan.tombolTambah}>
          Tambahkan
        </TombolStandar>
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
  kontainerTombol: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  }
});

export default LayarEditBarang;
