import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import TextStandar from "../komponen/TextStandar";
import TombolHeader from "../komponen/TombolHeader";

const LayarTransaksi = properti => {
  return (
    <View style={tampilan.layar}>
      <View style={tampilan.tengah}>
        <TextStandar>Layar Transaksi</TextStandar>
      </View>
    </View>
  );
};

LayarTransaksi.navigationOptions = navData => {
  return {
    headerTitle: "Buat Transaksi"
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={TombolHeader}>
    //     <Item
    //       title="Buat Transaksi"
    //       iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
    //       onPress={() => {
    //         navData.navigation.navigate("Transaksi");
    //       }}
    //     />
    //   </HeaderButtons>
    // )
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

export default LayarTransaksi;
