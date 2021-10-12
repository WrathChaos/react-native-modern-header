import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ModernHeader.style";
import Title, { ITitleProps } from "./components/title/Title";
import SidedComponent, {
  ISidedComponentProps,
} from "./components/sided-component/SidedComponent";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IModernHeaderProps extends ITitleProps, ISidedComponentProps {
  style?: CustomStyleProp;
  leftComponentDisable?: boolean;
  rightComponentDisable?: boolean;
  leftComponentStyle?: CustomStyleProp;
  rightComponentStyle?: CustomStyleProp;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const ModernHeader: React.FC<IModernHeaderProps> = ({
  style,
  leftComponentDisable,
  rightComponentDisable,
  leftComponentStyle,
  rightComponentStyle,
  onLeftPress,
  onRightPress,
  ...rest
}) => {
  const LeftComponent = () =>
    !leftComponentDisable ? (
      <SidedComponent
        style={[styles.leftComponentStyle, leftComponentStyle]}
        onPress={onLeftPress}
        {...rest}
      />
    ) : null;

  const RightComponent = () =>
    !rightComponentDisable ? (
      <SidedComponent
        style={[styles.rightComponentStyle, rightComponentStyle]}
        onPress={onRightPress}
        {...rest}
        imageSource={require("./local-assets/settings.png")}
      />
    ) : null;

  return (
    <View style={[styles.container, style]}>
      <LeftComponent />
      <Title {...rest} />
      <RightComponent />
    </View>
  );
};

export default ModernHeader;
