import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  textStyle: ViewStyle;
  leftCompStyle: ViewStyle;
  rightCompStyle: ViewStyle;
}

export const _container = (
  height: number | string,
  width: number | string,
  backgroundColor: string,
): ViewStyle => ({
  width,
  height,
  top: 0,
  backgroundColor,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  leftCompStyle: {
    left: 16,
    position: "absolute",
  },
  rightCompStyle: {
    right: 16,
    position: "absolute",
  },
  textStyle: {
    fontWeight: "800",
  },
});
