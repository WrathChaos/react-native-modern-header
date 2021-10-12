import * as React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Title.style";

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface ITitleProps {
  title: string;
  TextComponent?: any;
  titleTextStyle?: CustomTextStyleProp;
}

const Title: React.FC<ITitleProps> = ({
  titleTextStyle,
  title,
  TextComponent = Text,
}) => {
  return (
    <TextComponent style={[styles.titleTextStyle, titleTextStyle]}>
      {title}
    </TextComponent>
  );
};

export default Title;
