import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  leftComponentStyle: ViewStyle;
  rightComponentStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    top: 0,
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leftComponentStyle: {
    left: 16,
    position: "absolute",
  },
  rightComponentStyle: {
    right: 16,
    position: "absolute",
  },
});
