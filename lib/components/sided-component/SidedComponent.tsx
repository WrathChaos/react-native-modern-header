import * as React from "react";
import {
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SidedComponent.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface ISidedComponentProps {
  style?: CustomStyleProp;
  TouchableComponent?: any;
  imageSource?: ImageSourcePropType;
  customComponent?: React.ReactDOM;
  imageStyle?: CustomImageStyleProp;
  onPress?: () => void;
}

const SidedComponent: React.FC<ISidedComponentProps> = ({
  style,
  TouchableComponent = TouchableOpacity,
  imageStyle,
  customComponent,
  imageSource = require("../../local-assets/back.png"),
  onPress,
}) => {
  const hitSlop = {
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
  };

  return (
    <TouchableComponent
      style={[styles.container, style]}
      hitSlop={hitSlop}
      onPress={onPress}
    >
      {customComponent || (
        <Image
          resizeMode="contain"
          source={imageSource}
          style={[styles.imageStyle, imageStyle]}
        />
      )}
    </TouchableComponent>
  );
};

export default SidedComponent;
