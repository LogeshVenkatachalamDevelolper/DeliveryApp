import { Fonts } from './fonts';

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: Fonts.bold,
    letterSpacing: -0.5,
  },

  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: Fonts.semibold,
  },

  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: Fonts.semibold,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.regular,
  },

  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.regular,
  },

  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: Fonts.regular,
    color: '#6B7280',
  },

  button: {
    fontSize: 16,
    fontFamily: Fonts.semibold,
    textTransform: 'uppercase',
  },
};
