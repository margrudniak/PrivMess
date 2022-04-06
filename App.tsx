import React, { useEffect } from "react";
import { LogBox } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { AppNavigator } from "src/navigation";
import "src/i18n";
import { initFonts } from "src/themes/fonts";

const App = () => {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    (async () => {
      await initFonts();
    })();
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
