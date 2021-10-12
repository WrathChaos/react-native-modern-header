// import * as React from "react";
// import PropTypes from "prop-types";
// import { Text, View, TouchableOpacity, ViewStyle } from "react-native";
// import Icon from "react-native-dynamic-vector-icons";
// import styles, { _container } from "./ModernHeader.style";

// interface IProps {
//   title: string;
//   width: number | string;
//   height: number | string;
//   titleStyle: ViewStyle;
//   leftDisable: boolean;
//   leftIconName: string;
//   leftIconType: string;
//   leftIconSize: number;
//   rightDisable: boolean;
//   leftIconColor: string;
//   rightIconName: string;
//   rightIconType: string;
//   rightIconSize: number;
//   rightIconColor: string;
//   leftIconComponent: any;
//   backgroundColor: string;
//   rightIconComponent: any;
//   leftIconOnPress: () => void;
//   rightIconOnPress: () => void;
// }

// const ModernHeader = (props: IProps) => {
//   const {
//     title,
//     width,
//     height,
//     titleStyle,
//     leftDisable,
//     leftIconName,
//     leftIconType,
//     leftIconSize,
//     rightDisable,
//     leftIconColor,
//     rightIconName,
//     rightIconType,
//     rightIconSize,
//     rightIconColor,
//     leftIconOnPress,
//     backgroundColor,
//     rightIconOnPress,
//     leftIconComponent,
//     rightIconComponent,
//   } = props;

//   const renderTitle = () => <Text style={titleStyle}>{title}</Text>;

//   return (
//     <View style={_container(height, width, backgroundColor)}>
//       {renderLeftIconComp()}
//       <Title />
//       {renderRightIconComp()}
//     </View>
//   );
// };

// ModernHeader.defaultProps = {
//   left: 16,
//   right: 16,
//   leftIconSize: 25,
//   rightIconSize: 25,
//   title: "Header Title",
//   rightIconName: "heart",
//   rightIconType: "Entypo",
//   leftIconType: "Ionicons",
//   leftIconColor: "#bbbabe",
//   rightIconColor: "#23c4c1",
//   titleStyle: styles.titleStyle,
//   leftIconName: "ios-arrow-back",
// };

// export default ModernHeader;

import React from "react";
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
