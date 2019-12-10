import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import TombolStandar from "../komponen/TombolStandar";
import TextStandar from "../komponen/TextStandar";

import Warna from "../konstan/Warna";

const LayarLogTransaksi = properti => {
  return (
    <View style={tampilan.layar}>
      <View style={tampilan.tengah}>
        <View>
          <TextStandar>Layar Log Transaksi</TextStandar>
        </View>
        <View>
          <TombolStandar
            tekanTombol={() => {
              properti.navigation.navigate("Transaksi");
            }}
          >
            <TextStandar>Mulai Transaksi</TextStandar>
          </TombolStandar>
        </View>
      </View>
    </View>
  );
};

LayarLogTransaksi.navigationOptions = {
  title: "Daftar Transaksi"
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

export default LayarLogTransaksi;
