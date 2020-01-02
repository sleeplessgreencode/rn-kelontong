import React from "react";
import { View, StyleSheet, FlatList, Alert, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { BARANG } from "../data/dummy-data";

import ListBarang from "../komponen/ListBarang";
import TombolHeader from "../komponen/TombolHeader";

const LayarBarang = properti => {
  const renderBarang = dataFlatList => {
    return (
      <ListBarang
        judul={dataFlatList.item.namaBarang}
        tombolEdit={() => {
          properti.navigation.navigate("EditBarang");
        }}
        tombolHapus={() => {
          Alert.alert("Hapus Barang", "Anda yakin akan menghapus barang ini?", [
            {
              text: "Tidak",
              style: "default"
            },
            {
              text: "Ya",
              style: "destructive",
              onPress: () => {
                {
                  /* hapus barang */
                }
              }
            }
          ]);
        }}
      />
    );
  };

  return (
    <View style={tampilan.layar}>
      <FlatList
        data={BARANG}
        renderItem={renderBarang}
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

LayarBarang.navigationOptions = navData => {
  return {
    headerTitle: "Daftar Barang",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={TombolHeader}>
        <Item
          title="Tambah Barang"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("EditBarang");
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
  }
});

export default LayarBarang;
