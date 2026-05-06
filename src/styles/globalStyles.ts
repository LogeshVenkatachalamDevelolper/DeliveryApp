import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: SPACING.md,
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
  },

  textCenter: {
    textAlign: 'center',
  },
});

export const spaceTopWithSafeArea = (inset: number) => {
  return inset + SPACING.md;
};
export const spaceLeftWithSafeArea = (inset: number) => {
  return inset + SPACING.sm;
};
export const spaceRightWithSafeArea = (inset: number) => {
  return inset + SPACING.sm;
};
export const spaceBottomWithSafeArea = (inset: number) => {
  return inset + SPACING.md;
};
