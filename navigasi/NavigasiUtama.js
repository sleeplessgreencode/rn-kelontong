import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import LayarLogTransaksi from "../tampilan/LayarLogTransaksi";
import LayarTransaksi from "../tampilan/LayarTransaksi";
import LayarBarang from "../tampilan/LayarBarang";
import LayarEditBarang from "../tampilan/LayarEditBarang";

import Warna from "../konstan/Warna";

const opsiStandarNavigasi = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Warna.abuPekat : ""
  },
  headerTitleStyle: {
    fontFamily: "roboto-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "roboto-regular"
  },
  headerTintColor: Platform.OS === "android" ? Warna.utama : Warna.utama
};

const NavigasiTransaksi = createStackNavigator(
  {
    LogTransaksi: LayarLogTransaksi,
    Transaksi: LayarTransaksi
  },
  {
    initialRouteName: "LogTransaksi",
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

const NavigasiBarang = createStackNavigator(
  {
    Barang: LayarBarang,
    EditBarang: LayarEditBarang
  },
  {
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

const konfigurasiTab = {
  Transaksi: {
    screen: NavigasiTransaksi,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="md-cart" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Warna.abuPekat,
      tabBarLabel: "Transaksi"
    }
  },
  Barang: {
    screen: NavigasiBarang,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-clipboard" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Warna.abuPekat,
      tabBarLabel: "Barang"
    }
  }
};

const NavigasiTab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(konfigurasiTab, {
        activeColor: Warna.utama,
        inactiveColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Warna.utama
        }
      })
    : createBottomTabNavigator(konfigurasiTab, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "roboto-regular"
          },
          activeTintColor: Warna.ungu
        }
      });

export default createAppContainer(NavigasiTab);
