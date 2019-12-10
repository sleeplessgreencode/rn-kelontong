import React from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";

import { BARANG } from "../data/dummy-data";

import TombolStandar from "../komponen/TombolStandar";
import TextStandar from "../komponen/TextStandar";
import ListBarang from "../komponen/ListBarang";

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
    //     <TextStandar>Layar Barang</TextStandar>
    //     <TombolStandar
    //       tekanTombol={() => {
    //         props.navigation.navigate("EditBarang");
    //       }}
    //     >
    //       <TextStandar>Tambahkan Barang</TextStandar>
    //     </TombolStandar>
  );
};

LayarBarang.navigationOptions = {
  title: "Daftar Barang"
};

const tampilan = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: Warna.abuUtama
  }
});

export default LayarBarang;
