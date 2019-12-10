import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import TextStandar from "../komponen/TextStandar";
import TombolStandar from "./TombolStandar";
import Warna from "../konstan/Warna";

const ListBarang = properti => {
  let KontainerList = TouchableOpacity;

  if (Platform.OS === "android" && Platform.version >= 21) {
    KontainerList = TouchableNativeFeedback;
  }

  return (
    <KontainerList onPress={properti.tombolEdit}>
      <View style={tampilan.kontainerUtama}>
        <View style={tampilan.kepala}>
          {/* Title Header */}
          <TextStandar style={tampilan.teksJudul}>{properti.judul}</TextStandar>
        </View>
        <View style={tampilan.areaTombol}>
          <TombolStandar
            style={tampilan.tombol}
            tekanTombol={properti.tombolEdit}
          >
            Edit
          </TombolStandar>
          <TombolStandar
            style={tampilan.tombol}
            tekanTombol={properti.tombolHapus}
          >
            Hapus
          </TombolStandar>
        </View>
      </View>
    </KontainerList>
  );
};

const tampilan = StyleSheet.create({
  kontainerUtama: {
    flex: 1,
    margin: 30,
    height: 300,
    backgroundColor: Warna.abuPekat,
    borderRadius: 25
  },
  kepala: {
    height: "80%"
  },
  teksJudul: {
    fontFamily: "roboto-bold",
    fontSize: 24,
    padding: 20
  },
  areaTombol: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "20%",
    paddingBottom: 30,
    backgroundColor: Warna.abuPekat,
    borderRadius: 25
  },
  tombol: {
    width: 300
  }
});

export default ListBarang;
