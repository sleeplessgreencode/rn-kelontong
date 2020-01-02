import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import TombolStandar from "../komponen/TombolStandar";
import TextStandar from "../komponen/TextStandar";
import TombolHeader from "../komponen/TombolHeader";

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

LayarLogTransaksi.navigationOptions = navData => {
  return {
    headerTitle: "Daftar Transaksi",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={TombolHeader}>
        <Item
          title="Buat Transaksi"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Transaksi");
          }}
        />
      </HeaderButtons>
    )
  };
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
