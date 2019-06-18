// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { createMuiTheme } from '@material-ui/core/styles';

// Interactive DefaultTheme Object: https://material-ui.com/customization/default-theme/
export const GOOGLE_THEME = createMuiTheme();

/*
Creating Custom Themes: https://material-ui.com/customization/themes
ThemeProvider: https://material-ui.com/customization/themes/#theme-provider
Overrides: https://material-ui.com/customization/globals/
createMuiTheme: https://material-ui.com/customization/themes/#createmuitheme-options-theme
Customizing Color: https://material-ui.com/customization/color
Customizing Palette: https://material-ui.com/customization/palette
Color Tool: https://material-ui.com/customization/color/#color-tool
*/

export const COLORS = {
  materialBlue: '#2196F3',
};

export const PALETTE = {
  primary: {
    main: '#009688',
    light: '#52c7b8',
    dark: '#00675b',
    contrastText: '#fff',
  },
  secondary: {
    main: '#ffe082',
    light: '#ffffb3',
    dark: '#caae53',
    contrastText: '#000',
  },
};

const CUSTOM_THEME = createMuiTheme({
  // Custom key to define colors (or anything you want available in the theme object)
  colors: COLORS,
  // Define a custom palette for Material UI to use
  palette: PALETTE,
  // Apply props to all instances of a component
  props: {
    // Name of the component to apply props to (you can't target variants)
    MuiButtonGroup: {
      disableRipple: true,
    },
    MuiButton: {
      disableRipple: true,
    },
  },
  // Apply CSS to all instances of a component
  overrides: {
    // Name of the component to apply CSS to
    MuiButton: {
      // The base class for the component (will impact all variants)
      // NOTE: If a variant has the same property as that which is being defined
      // here, the variant's property value will be applied due to specificity
      // Example: defining color on .root will not impact .contained because
      // .contained defines its own `color`
      root: {
        // Pseudo-class styling example
        // '&:hover': {
        //   color: COLORS.materialBlue
        // },
      },
      // The variant-specific override styles for the component
      // e.g. <Button variant='contained' />
      text: {
        // custom styles go here
      },
      contained: {
        // custom styles go here
      },
    },
  }
});

console.log('Google Theme', GOOGLE_THEME);
console.log('Colors', COLORS);
console.log('Custom Theme', CUSTOM_THEME);

export default CUSTOM_THEME;
