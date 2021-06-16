import * as React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, ViewStyle } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, { _container } from "./ModernHeader.style";

const hitslopObj = {
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
};

interface IProps {
  title: string;
  width: number | string;
  height: number | string;
  titleStyle: ViewStyle;
  leftDisable: boolean;
  leftIconName: string;
  leftIconType: string;
  leftIconSize: number;
  rightDisable: boolean;
  leftIconColor: string;
  rightIconName: string;
  rightIconType: string;
  rightIconSize: number;
  rightIconColor: string;
  leftIconComponent: any;
  backgroundColor: string;
  rightIconComponent: any;
  leftIconOnPress: () => void;
  rightIconOnPress: () => void;
}

const ModernHeader = (props: IProps) => {
  const {
    title,
    width,
    height,
    titleStyle,
    leftDisable,
    leftIconName,
    leftIconType,
    leftIconSize,
    rightDisable,
    leftIconColor,
    rightIconName,
    rightIconType,
    rightIconSize,
    rightIconColor,
    leftIconOnPress,
    backgroundColor,
    rightIconOnPress,
    leftIconComponent,
    rightIconComponent,
  } = props;

  const renderLeftIconComp = () =>
    !leftDisable && (
      <TouchableOpacity
        style={styles.leftCompStyle}
        hitSlop={hitslopObj}
        onPress={leftIconOnPress}
      >
        {leftIconComponent || (
          <Icon
            name={leftIconName}
            type={leftIconType}
            size={leftIconSize}
            color={leftIconColor}
          />
        )}
      </TouchableOpacity>
    );

  const renderRightIconComp = () =>
    !rightDisable && (
      <TouchableOpacity
        style={styles.rightCompStyle}
        onPress={rightIconOnPress}
      >
        {rightIconComponent || (
          <Icon
            name={rightIconName}
            type={rightIconType}
            size={rightIconSize}
            color={rightIconColor}
          />
        )}
      </TouchableOpacity>
    );

  const renderTitle = () => <Text style={titleStyle}>{title}</Text>;

  return (
    <View style={_container(height, width, backgroundColor)}>
      {renderLeftIconComp()}
      {renderTitle()}
      {renderRightIconComp()}
    </View>
  );
};

ModernHeader.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  title: PropTypes.string,
  leftIconName: PropTypes.string,
  leftIconType: PropTypes.string,
  leftIconColor: PropTypes.string,
  rightIconName: PropTypes.string,
  rightIconType: PropTypes.string,
  rightIconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  leftIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rightIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ModernHeader.defaultProps = {
  left: 16,
  right: 16,
  height: 70,
  width: "100%",
  leftIconSize: 25,
  rightIconSize: 25,
  title: "Header Title",
  rightIconName: "heart",
  rightIconType: "Entypo",
  backgroundColor: "#fff",
  leftIconType: "Ionicons",
  leftIconColor: "#bbbabe",
  rightIconColor: "#23c4c1",
  titleStyle: styles.titleStyle,
  leftIconName: "ios-arrow-back",
};

export default ModernHeader;
