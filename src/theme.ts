export const colors = {
  bg: '#F4F5FA',
  bgAlt: '#F4F4F4',
  panel: '#ECF1FA',
  surface: '#FFFFFF',
  surfaceSubtle: '#DCE5F4',
  fg: '#23233C',
  textStrong: '#1C1C1C',
  secondary: '#23233C',
  accent: '#6CC57C',
  accentLight: '#61D27C',
  accentGradientEnd: '#179F2F',
  accentSoft: '#6CC57CD9',
  onAccent: '#FFFFFF',
  deposit: '#2B2B2B',
  border: '#707070',
  divider: '#E3E3E3',
  iconInactive: '#BBC7DB',
  chevron: '#181461',
  muted: '#A5A5A5',
  mutedAlt: '#8D8D8D',
  faint: '#B4B4B4',
  linkMuted: '#898888',
  accentLine: '#C48B30',
  facebook: '#0F279E',
  shadowTint: '#60719329',
} as const;

export const spacing = {
  s0: 4,
  s1: 8,
  s2: 16,
  s3: 24,
  s4: 40,
  s5: 45,
  s6: 50,
} as const;

export const radii = {
  sm: 3,
  md: 5,
  lg: 8,
  xl: 10,
  '2xl': 12,
  '3xl': 18,
  card: 20,
  pill: 999,
} as const;

export const fonts = {
  body: 'Inter_400Regular',
  bodyThin: 'Inter_100Thin',
  bodyMedium: 'Inter_500Medium',
  display: 'Aleo_700Bold',
  accent: 'Ubuntu_400Regular',
  accentBold: 'Ubuntu_700Bold',
  login: 'Actor_400Regular',
} as const;

export const typography = {
  eyebrow: {
    fontFamily: fonts.bodyThin,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  },
  eyebrowSmall: {
    fontFamily: fonts.bodyThin,
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
  },
  heroNumber: {
    fontFamily: fonts.bodyMedium,
    fontSize: 45,
    lineHeight: 57,
    textTransform: 'uppercase',
  },
  titleXl: {
    fontFamily: fonts.display,
    fontSize: 40,
    lineHeight: 51,
  },
  titleLg: {
    fontFamily: fonts.display,
    fontSize: 25,
    lineHeight: 32,
  },
  titleMd: {
    fontFamily: fonts.display,
    fontSize: 24,
    lineHeight: 29,
  },
  titleSm: {
    fontFamily: fonts.display,
    fontSize: 16,
    lineHeight: 19,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 19,
  },
  bodySm: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 18,
  },
  caption: {
    fontFamily: fonts.bodyThin,
    fontSize: 12,
    lineHeight: 15,
  },
  tabLabel: {
    fontFamily: fonts.display,
    fontSize: 7,
    lineHeight: 5,
  },
} as const;
