import { TimeType } from "../types";

export interface ColorPallete {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutral_dark: string;
  neutral_darkness: string;
}

export interface TextFonts {
  primary: string;
  default: string;
}

export interface TimeProps {
  count: TimeType;
  info: string;
}
