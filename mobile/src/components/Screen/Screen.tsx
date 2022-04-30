import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isIos } from "src/utils/helpers";
import {
  BareScreenProps,
  KeyboardAwareScreenProps,
  KeyboardAwareScrollScreenProps,
  ScreenProps,
} from "./Screen.types";

const BareScreen = ({ ...props }: BareScreenProps) => {
  return (
    <View {...props} style={[props.insetStyle, props.style]}>
      {props.children}
    </View>
  );
};

const KeyboardAwareScrollScreen = ({
  ...props
}: KeyboardAwareScrollScreenProps) => {
  return (
    <KeyboardAwareScrollView>
      <View {...props} style={[props.insetStyle, props.style]}>
        {props.children}
      </View>
    </KeyboardAwareScrollView>
  );
};

const KeyboardAwareScreen = ({ ...props }: KeyboardAwareScreenProps) => {
  return (
    <KeyboardAvoidingView
      behavior={isIos ? "padding" : "height"}
      style={[props.insetStyle, props.style]}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

export const Screen = (props: ScreenProps) => {
  const insets = useSafeAreaInsets();
  const insetStyle = {
    paddingTop: props.unsafeTop ? 0 : insets.top,
    paddingBottom: props.unsafeBottom ? 0 : insets.bottom,
  };

  const renderContent = () => {
    if (props.keyboardAware) {
      return <KeyboardAwareScreen {...props} {...{ insetStyle }} />;
    }
    if (props.keyboardAwareScroll) {
      return <KeyboardAwareScrollScreen {...props} {...{ insetStyle }} />;
    } else {
      return <BareScreen {...props} {...{ insetStyle }} />;
    }
  };

  return (
    <>
      <StatusBar style={props.statusBar || "light"} />
      {renderContent()}
    </>
  );
};
