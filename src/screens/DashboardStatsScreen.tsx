import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts, radii } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'DashboardStats'>;

const shadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.08,
  shadowRadius: 16,
  elevation: 4,
} as const;

const monthLabels: { label: string; x: number }[] = [
  { label: 'M', x: 49 },
  { label: 'J', x: 76 },
  { label: 'J', x: 103 },
  { label: 'A', x: 129 },
  { label: 'S', x: 156 },
  { label: 'O', x: 183 },
  { label: 'N', x: 210 },
  { label: 'D', x: 237 },
  { label: 'J', x: 263 },
  { label: 'M', x: 290 },
  { label: 'A', x: 317 },
];

const yAxisLabels: { label: string; y: number }[] = [
  { label: '90', y: 382 },
  { label: '80', y: 465 },
  { label: '70', y: 548 },
  { label: '60', y: 626 },
];

const gridLines: number[] = [426, 512, 596];

export default function DashboardStatsScreen({ navigation }: Props) {
  return (
    <View style={styles.container} testID="dashboard-stats-screen">
      <Image
        source={require('../../design/figma/assets/gruppe-maskieren-6.png')}
        style={styles.topIllustration}
      />

      <Pressable
        testID="dashboard-stats-back"
        accessibilityRole="button"
        accessibilityLabel="Back"
        onPress={() => navigation.goBack()}
        hitSlop={8}
        style={styles.backButton}
      >
        <Image
          source={require('../../design/figma/assets/noun-back-1227057.png')}
          style={styles.backIcon}
        />
      </Pressable>

      <Image
        source={require('../../design/figma/assets/noun-user-1335326.png')}
        style={styles.headerUserIcon}
      />

      <Text style={styles.title}>Statistics</Text>
      <Text style={styles.since}>Since 21. Dec</Text>
      <Text style={styles.hero}>
        20 <Text style={styles.heroDays}>DAYS</Text>
      </Text>
      <Text style={styles.dateRange}>Dec 2024 - Jan 2024</Text>

      <View style={styles.switch}>
        <Text style={[styles.switchLabel, { left: 21 }]}>D</Text>
        <Text style={[styles.switchLabel, { left: 116 }]}>W</Text>
        <Text style={[styles.switchLabel, { left: 211 }]}>M</Text>
        <View style={styles.switchActive}>
          <Text style={styles.switchActiveLabel}>Y</Text>
        </View>
      </View>

      <View style={styles.chartCard}>
        {gridLines.map((y) => (
          <View key={y} style={[styles.gridHorizontal, { top: y }]} />
        ))}
        <View style={styles.gridVertical} />
        <Image
          source={require('../../design/figma/assets/gruppe-maskieren-1.png')}
          style={styles.chartImage}
        />
        {monthLabels.map((m) => (
          <Text key={m.x} style={[styles.monthLabel, { left: m.x }]}>
            {m.label}
          </Text>
        ))}
        {yAxisLabels.map((n) => (
          <Text key={n.y} style={[styles.yAxisLabel, { top: n.y }]}>
            {n.label}
          </Text>
        ))}
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>20 DAYS</Text>
        </View>
      </View>

      <Text style={styles.topRun}>Top Run: 20 Days</Text>
      <Text style={styles.restarts}>Restarts: 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topIllustration: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 455,
    height: 120,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 28,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 11,
    height: 18,
  },
  headerUserIcon: {
    position: 'absolute',
    top: 25,
    left: 348,
    width: 27,
    height: 27,
  },
  title: {
    position: 'absolute',
    top: 135,
    left: 40,
    fontFamily: fonts.display,
    fontSize: 16,
    lineHeight: 19,
    color: colors.textStrong,
  },
  since: {
    position: 'absolute',
    top: 193,
    left: 40,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fg,
  },
  hero: {
    position: 'absolute',
    top: 219,
    left: 40,
    fontFamily: fonts.body,
    fontSize: 24,
    lineHeight: 17,
    color: colors.textStrong,
  },
  heroDays: {
    fontSize: 14,
  },
  dateRange: {
    position: 'absolute',
    top: 255,
    left: 40,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 17,
    color: colors.textStrong,
  },
  switch: {
    position: 'absolute',
    top: 293,
    left: 40,
    width: 335,
    height: 34,
    backgroundColor: colors.surfaceSubtle,
    borderRadius: radii.lg,
  },
  switchLabel: {
    position: 'absolute',
    top: 9,
    fontFamily: fonts.body,
    fontSize: 12,
    lineHeight: 14,
    color: colors.textStrong,
  },
  switchActive: {
    position: 'absolute',
    top: 4,
    left: 290,
    width: 41,
    height: 26,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 2,
  },
  switchActiveLabel: {
    fontFamily: fonts.display,
    fontSize: 12,
    lineHeight: 14,
    color: colors.textStrong,
  },
  chartCard: {
    position: 'absolute',
    top: 342,
    left: 39,
    width: 336,
    height: 336,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...shadow,
  },
  gridHorizontal: {
    position: 'absolute',
    left: 0,
    width: 336,
    height: 0,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
  },
  gridVertical: {
    position: 'absolute',
    top: 0,
    left: 297,
    height: 336,
    width: 0,
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
  },
  chartImage: {
    position: 'absolute',
    top: 2,
    left: 3,
    width: 293,
    height: 333,
  },
  monthLabel: {
    position: 'absolute',
    top: 314,
    width: 9,
    fontFamily: fonts.display,
    fontSize: 12,
    lineHeight: 14,
    color: colors.textStrong,
    opacity: 0.2,
    textAlign: 'center',
  },
  yAxisLabel: {
    position: 'absolute',
    left: 309,
    width: 14,
    fontFamily: fonts.display,
    fontSize: 12,
    lineHeight: 14,
    color: colors.textStrong,
    opacity: 0.2,
  },
  tooltip: {
    position: 'absolute',
    top: 121,
    left: 139,
    width: 72,
    height: 26,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00C623',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 3,
  },
  tooltipText: {
    fontFamily: fonts.body,
    fontSize: 12,
    lineHeight: 14,
    color: colors.textStrong,
  },
  topRun: {
    position: 'absolute',
    top: 717,
    left: 40,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 17,
    color: colors.textStrong,
  },
  restarts: {
    position: 'absolute',
    top: 742,
    left: 40,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 17,
    color: colors.textStrong,
  },
});
