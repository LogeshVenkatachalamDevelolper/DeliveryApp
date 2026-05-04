import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
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
