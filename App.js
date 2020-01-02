import React, { useState } from "react";
import { Text, View } from "react-native";
import NavigasiUtama from "./navigasi/NavigasiUtama";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { init } from "./database/db";

// init()
//   .then(() => {
//     console.log("initialized database!");
//   })
//   .catch(err => {
//     console.log("initailized database failed!");
//     console.log(err);
//   });

const muatFont = () => {
  return Font.loadAsync({
    "eczar-regular": require("./assets/fonts/Eczar-Regular.ttf"),
    "eczar-bold": require("./assets/fonts/Eczar-Bold.ttf"),
    "roboto-regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/RobotoCondensed-Bold.ttf")
  });
};

export default function App() {
  const [fontDimuat, setFontDimuat] = useState(false);

  if (!fontDimuat) {
    return (
      <AppLoading
        startAsync={muatFont}
        onFinish={() => {
          setFontDimuat(true);
        }}
      />
    );
  }

  return <NavigasiUtama />;
}
