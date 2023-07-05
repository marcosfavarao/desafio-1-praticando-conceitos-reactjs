import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      blueDark: string;
      blue: string;
      purpleDark: string;
      purple: string;
      danger: string;
    };

    fonts: {
      family: {
        inter: string;
      };

      weight: {
        normal: number;
        bold: number;
        extraBold: number;
      };
    };

    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
  }
}
