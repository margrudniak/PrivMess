import { palette } from "./palette";

export const color = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: palette.tundora,
  primary: palette.portica,
  secondary: palette.jordyBlue,
  tertiary: palette.tundora,
  tertiaryDarker: palette.mineShaft,
  text: palette.white,
  icon: palette.white,
  error: palette.mandy,
};

export type ColorTypes = keyof typeof color;
