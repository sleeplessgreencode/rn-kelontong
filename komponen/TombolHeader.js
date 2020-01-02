import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import Warna from "../konstan/Warna";

const TombolHeaderStandar = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? Warna.utama : "white"}
    />
  );
};

export default TombolHeaderStandar;
