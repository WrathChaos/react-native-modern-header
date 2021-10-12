import { TextStyle, StyleSheet } from "react-native";

interface Style {
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  titleTextStyle: {
    fontSize: 20,
    fontWeight: "800",
  },
});
