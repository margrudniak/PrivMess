import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderProps } from "./Header.types";
import { color } from "src/themes";
import styles from "./Header.style";

export const Header = ({
  left,
  onPressLeft,
  leftStyle,
  middle,
  onPressMiddle,
  middleStyle,
  right,
  onPressRight,
  rightStyle,
  style,
}: HeaderProps) => {
  const renderLeft = () => {
    switch (left) {
      case "back":
        return (
          <Ionicons
            name="arrow-back"
            size={45}
            color={color.icon}
            onPress={onPressLeft}
          />
        );
        break;
      default:
        void 0;
        break;
    }
  };

  const renderMiddle = () => {
    switch (middle) {
      case "logo":
        break;
      default:
        break;
    }
  };

  const renderRight = () => {
    switch (right) {
      case "profile":
        break;
      default:
        break;
    }
  };
  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.leftWrapper, leftStyle]}>{renderLeft()}</View>
      <View style={[styles.middleWrapper, middleStyle]}>
        {/* {renderMiddle()} */}
      </View>
      <View style={[styles.rightWrapper, rightStyle]}>
        {/* {renderRight()} */}
      </View>
    </View>
  );
};
