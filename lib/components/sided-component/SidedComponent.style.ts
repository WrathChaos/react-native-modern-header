import { ViewStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {},
  imageStyle: {
    width: 20,
    height: 20,
  },
});
