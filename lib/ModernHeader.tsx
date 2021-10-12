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
  leftImageSource?: any;
  rightImageSource?: any;
  leftComponentDisable?: boolean;
  rightComponentDisable?: boolean;
  leftCustomComponent?: React.ReactDOM;
  rightCustomComponent?: React.ReactDOM;
  leftComponentStyle?: CustomStyleProp;
  rightComponentStyle?: CustomStyleProp;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const ModernHeader: React.FC<IModernHeaderProps> = ({
  style,
  leftImageSource,
  rightImageSource,
  leftComponentDisable,
  rightComponentDisable,
  leftComponentStyle,
  rightComponentStyle,
  leftCustomComponent,
  rightCustomComponent,
  onLeftPress,
  onRightPress,
  ...rest
}) => {
  const LeftComponent = () =>
    !leftComponentDisable ? (
      <SidedComponent
        style={[styles.leftComponentStyle, leftComponentStyle]}
        customComponent={leftCustomComponent}
        imageSource={leftImageSource}
        onPress={onLeftPress}
        {...rest}
      />
    ) : null;

  const RightComponent = () =>
    !rightComponentDisable ? (
      <SidedComponent
        style={[styles.rightComponentStyle, rightComponentStyle]}
        customComponent={rightCustomComponent}
        imageSource={rightImageSource || require("./local-assets/settings.png")}
        onPress={onRightPress}
        {...rest}
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
