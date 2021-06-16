import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
// import ModernHeader from "react-native-modern-header";
import ModernHeader from "./lib/ModernHeader";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ModernHeader />
      </SafeAreaView>
    </>
  );
};

export default App;
