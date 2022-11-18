import { pxToRem, responsiveFontSizes } from "../utils/getFontValue";

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Montserrat"; // Local Font
// const FONT_SECONDARY = 'Aileron'; // Local Font

const typography = {
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(36),
    color: "#fff",
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 40, md: 42, lg: 46 }),
  },
  h2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(30),
    color: "#fff",
    ...responsiveFontSizes({ sm: 34, md: 36, lg: 40 }),
  },
  h3: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    color: "#fff",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  p: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    fontSize: pxToRem(20),
  },
  a: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    fontSize: pxToRem(16),
  },
  span: {
    fontFamily: FONT_PRIMARY,
  },
  subtitle1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#6B6A85",
    fontSize: pxToRem(18),
  },
  body2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 22 / 14,
    color: "#6B6A85",
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
