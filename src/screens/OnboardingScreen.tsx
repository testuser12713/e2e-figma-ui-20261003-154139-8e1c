import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts, radii, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const SLIDE_COUNT = 3;

function usePager() {
  const { width } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * width, animated: true });
    setActive(index);
  };

  const onMomentumScrollEnd = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActive(index);
  };

  return { width, scrollRef, active, goTo, onMomentumScrollEnd };
}

export default function OnboardingScreen({ navigation }: Props) {
  const { width, scrollRef, active, goTo, onMomentumScrollEnd } = usePager();

  const goToMain = () => navigation.navigate('Main', { screen: 'Dashboard' });

  return (
    <View style={styles.root} testID="onboarding-screen">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        style={{ width }}
      >
        <LoginSlide width={width} onNext={() => goTo(1)} onSkip={goToMain} />
        <LoginSlide2 width={width} onNext={() => goTo(2)} />
        <LoginSlide3 width={width} onLogin={goToMain} />
      </ScrollView>

      <View style={styles.dots} pointerEvents="none">
        {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === active && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

type SlideProps = { width: number };

function LoginSlide({ width, onNext, onSkip }: SlideProps & { onNext: () => void; onSkip: () => void }) {
  return (
    <View style={[styles.slide, { width }]} testID="onboarding-slide-1">
      <Image
        source={require('../../design/figma/assets/jo-sonn-m-tzzd5z720-unsplash.png')}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <View style={styles.slide1Body}>
        <Text style={styles.slide1Title}>best tips for your motivation</Text>
        <Text style={styles.slide1Text}>
          Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla
          maximus porta velit ut molestie. Proin quis convallis mauris. In
          facilisis justo at mi pha…
        </Text>
        <View style={styles.slide1Actions}>
          <Pressable
            testID="onboarding-skip"
            accessibilityRole="link"
            accessibilityLabel="Skip step"
            onPress={onSkip}
          >
            <Text style={styles.skipText}>Skip step</Text>
          </Pressable>
          <Pressable
            testID="onboarding-next-1"
            accessibilityRole="button"
            accessibilityLabel="Next"
            onPress={onNext}
            style={({ pressed }) => [styles.nextButton, pressed && styles.pressed]}
          >
            <Text style={styles.nextLabel}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function LoginSlide2({ width, onNext }: SlideProps & { onNext: () => void }) {
  return (
    <View style={[styles.slide, { width }]} testID="onboarding-slide-2">
      <View style={styles.slide2ShapeBack} />
      <View style={styles.slide2ShapeFront} />
      <Image
        source={require('../../design/figma/assets/undraw-workout-gcgu.png')}
        style={styles.slide2Illustration}
        resizeMode="contain"
      />
      <Text style={styles.slide2Title}>
        Let&apos;s achive the best Version{'\n'}of yourself katy
      </Text>
      <TextInput
        testID="onboarding-name"
        accessibilityLabel="What is your Name?"
        placeholder="What is your Name?"
        placeholderTextColor={colors.fg}
        style={[styles.slide2Input, { top: 527 }]}
      />
      <TextInput
        testID="onboarding-age"
        accessibilityLabel="What is your Age?"
        placeholder="What is your Age?"
        placeholderTextColor={colors.fg}
        style={[styles.slide2Input, { top: 605 }]}
      />
      <Text style={styles.slide2Steps}>1/1 steps</Text>
      <Pressable
        testID="onboarding-next-2"
        accessibilityRole="button"
        accessibilityLabel="Next"
        onPress={onNext}
        style={({ pressed }) => [styles.slide2NextWrap, pressed && styles.pressed]}
      >
        <View style={styles.slide2NextCircle}>
          <Text style={styles.slide2NextChevron}>›</Text>
        </View>
        <Text style={styles.slide2NextLabel}>Next</Text>
      </Pressable>
    </View>
  );
}

function LoginSlide3({ width, onLogin }: SlideProps & { onLogin: () => void }) {
  return (
    <View style={[styles.slide, { width }]} testID="onboarding-slide-3">
      <Image
        source={require('../../design/figma/assets/gruppe-maskieren-2.png')}
        style={styles.slide3Illustration}
        resizeMode="cover"
      />
      <Text style={styles.welcome}>Welcome</Text>
      <TextInput
        testID="onboarding-email"
        accessibilityLabel="Email"
        placeholder="mauricio@divelement.io"
        placeholderTextColor={colors.fg}
        style={[styles.slide3Input, { top: 321 }]}
      />
      <TextInput
        testID="onboarding-password"
        accessibilityLabel="Password"
        placeholder="***********"
        placeholderTextColor={colors.fg}
        secureTextEntry
        style={[styles.slide3Input, { top: 411 }]}
      />
      <Pressable
        testID="onboarding-forgot"
        accessibilityRole="link"
        accessibilityLabel="Forgot you password?"
      >
        <Text style={styles.forgotText}>Forgot you password?</Text>
      </Pressable>
      <Pressable
        testID="onboarding-login"
        accessibilityRole="button"
        accessibilityLabel="Login"
        onPress={onLogin}
        style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}
      >
        <Text style={styles.loginLabel}>Login</Text>
      </Pressable>
      <Text style={styles.signupText}>Don&apos;t have an account? sign up</Text>
      <View style={styles.socialRow}>
        <Pressable
          testID="onboarding-social-facebook"
          accessibilityRole="button"
          accessibilityLabel="Sign in with Facebook"
          style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}
        >
          <Image
            source={require('../../design/figma/assets/facebook-2.png')}
            style={styles.socialFacebook}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable
          testID="onboarding-social-search"
          accessibilityRole="button"
          accessibilityLabel="Sign in with Google"
          style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}
        >
          <Image
            source={require('../../design/figma/assets/search-1.png')}
            style={styles.socialSearch}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  slide: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.bg,
    overflow: 'hidden',
  },
  dots: {
    position: 'absolute',
    bottom: spacing.s4,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.s1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: radii.pill,
    backgroundColor: colors.divider,
  },
  dotActive: {
    backgroundColor: colors.accentLight,
  },
  pressed: {
    opacity: 0.85,
  },

  heroImage: {
    position: 'absolute',
    top: -85,
    left: -64,
    width: 486,
    height: 729,
  },
  slide1Body: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: spacing.s3,
    paddingHorizontal: spacing.s3,
    paddingBottom: spacing.s5,
    backgroundColor: colors.bg,
  },
  slide1Title: {
    fontFamily: fonts.display,
    fontSize: 25,
    lineHeight: 32,
    color: colors.fg,
    textAlign: 'center',
  },
  slide1Text: {
    fontFamily: fonts.body,
    fontSize: 10,
    lineHeight: 13,
    color: colors.muted,
    textAlign: 'center',
    marginTop: spacing.s2,
  },
  slide1Actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.s3,
  },
  skipText: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 19,
    color: colors.faint,
  },
  nextButton: {
    backgroundColor: colors.accent,
    borderRadius: radii.lg,
    paddingHorizontal: spacing.s3,
    paddingVertical: 12,
    minWidth: 115,
    alignItems: 'center',
  },
  nextLabel: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 19,
    color: colors.onAccent,
  },

  slide2ShapeBack: {
    position: 'absolute',
    top: -347,
    left: -193,
    width: 815,
    height: 997,
    backgroundColor: colors.accent,
    opacity: 0.2,
  },
  slide2ShapeFront: {
    position: 'absolute',
    top: -387,
    left: -186,
    width: 767,
    height: 887,
    backgroundColor: colors.accent,
  },
  slide2Illustration: {
    position: 'absolute',
    top: 192,
    left: 92,
    width: 242,
    height: 190,
  },
  slide2Title: {
    position: 'absolute',
    top: 432,
    left: 45,
    width: 324,
    fontFamily: fonts.display,
    fontSize: 25,
    lineHeight: 30,
    color: colors.accent,
    textAlign: 'center',
  },
  slide2Input: {
    position: 'absolute',
    left: 39,
    width: 336,
    height: 54,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing.s2,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 18,
    color: colors.fg,
  },
  slide2Steps: {
    position: 'absolute',
    top: 750,
    left: 39,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 20,
    color: colors.textStrong,
    opacity: 0.54,
  },
  slide2NextWrap: {
    position: 'absolute',
    top: 734,
    left: 179,
    alignItems: 'center',
  },
  slide2NextCircle: {
    width: 56,
    height: 56,
    borderRadius: radii.pill,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide2NextChevron: {
    fontFamily: fonts.body,
    fontSize: 26,
    lineHeight: 30,
    color: colors.onAccent,
  },
  slide2NextLabel: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 20,
    color: colors.textStrong,
    marginTop: spacing.s1,
  },

  slide3Illustration: {
    position: 'absolute',
    top: -4,
    left: -2,
    width: 417,
    height: 201,
  },
  welcome: {
    position: 'absolute',
    top: 230,
    left: 120,
    width: 174,
    fontFamily: fonts.display,
    fontSize: 40,
    lineHeight: 51,
    color: colors.fg,
    textAlign: 'center',
  },
  slide3Input: {
    position: 'absolute',
    left: 39,
    width: 336,
    height: 54,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing.s2,
    fontFamily: fonts.login,
    fontSize: 14,
    lineHeight: 18,
    color: colors.fg,
  },
  forgotText: {
    position: 'absolute',
    top: 489,
    left: 139,
    width: 136,
    fontFamily: fonts.body,
    fontSize: 13,
    lineHeight: 17,
    color: colors.mutedAlt,
    textAlign: 'center',
  },
  loginButton: {
    position: 'absolute',
    top: 529,
    left: 42,
    width: 333,
    height: 54,
    backgroundColor: colors.secondary,
    borderRadius: radii['3xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLabel: {
    fontFamily: fonts.display,
    fontSize: 20,
    lineHeight: 25,
    color: colors.onAccent,
  },
  signupText: {
    position: 'absolute',
    top: 602,
    left: 119,
    width: 191,
    fontFamily: fonts.display,
    fontSize: 13,
    lineHeight: 17,
    color: colors.linkMuted,
    textAlign: 'center',
  },
  socialRow: {
    position: 'absolute',
    top: 649,
    left: 115,
    flexDirection: 'row',
    gap: spacing.s2,
  },
  socialButton: {
    width: 82,
    height: 51,
    backgroundColor: colors.surface,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialFacebook: {
    width: 12,
    height: 24,
  },
  socialSearch: {
    width: 24,
    height: 24,
  },
});
