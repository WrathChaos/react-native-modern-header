import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  _container,
  _leftCompStyle,
  _rightCompStyle,
} from "./ModernHeader.style";

const hitslopObj = {
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
};

const ModernHeader = (props) => {
  const {
    text,
    width,
    height,
    textStyle,
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
  return (
    <View style={_container(height, width, backgroundColor)}>
      {!leftDisable && (
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
      )}
      <Text style={textStyle}>{text}</Text>
      {!rightDisable && (
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
      )}
    </View>
  );
};

ModernHeader.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  text: PropTypes.string,
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
  text: "Header Title",
  rightIconName: "heart",
  rightIconType: "Entypo",
  backgroundColor: "#fff",
  leftIconType: "Ionicons",
  leftIconColor: "#bbbabe",
  rightIconColor: "#23c4c1",
  textStyle: styles.textStyle,
  leftIconName: "ios-arrow-back",
};

export default ModernHeader;
