# Business-Handler

A mobile-first Fintech portfolio app (the "Business-Handler" Figma frames) built as a
clickable prototype: a login/onboarding flow, a Dashboard with menu and statistics
views, and Money Management with a transaction list, a detail view and an add flow.
Everything runs entirely offline — no backend, no network access; all data is local
sample data and local image assets.

## Tech Stack

- **Language**: TypeScript
- **Framework**: Expo / React Native (SDK 57)
- **Navigation**: React Navigation (native stack + bottom tabs)
- **Rendering**: `expo-linear-gradient` (gradient fills), `expo-blur` (blur effects),
  `react-native-svg` (vector shapes without an exported asset)
- **Fonts**: `@expo-google-fonts` (Inter, Aleo, Ubuntu, Actor) via `expo-font`
- **Icons**: `@expo/vector-icons`
- **State**: React Context (`src/store/transactions.tsx`)
- **Testing**: Jest with the `jest-expo` preset and `@testing-library/react-native`

## Install

```bash
npm ci        # or: npm install
```

## Run

### On a device / simulator

```bash
npx expo start          # then press i (iOS), a (Android), or w (web)
```

> Do not run `npm start`/`expo start` as part of an automated pipeline — the dev
> server keeps running. Use `npm run build` (below) for a one-shot build.

### Web build (production)

```bash
npm run build           # expo export --platform web  →  dist/
```

Serve the exported site (e.g. `npx serve dist`) or let the platform's static server
serve `dist/` directly.

## How to use

- **Onboarding** — the app opens on the onboarding stub. Tap **Next** to enter the
  app.
- **Dashboard / Money tabs** — the bottom tab bar switches between the Dashboard and
  Money Management.
- **Money Management** — shows the sample transaction list; detail and add flows are
  reachable through the registered screens (`MoneyDetail`, `MoneyAdd`).

## Features

- Login/onboarding stub that leads into the main tab navigation
- Bottom-tab navigation between Dashboard and Money Management
- Registered screens: Onboarding, Dashboard, DashboardMenu, DashboardStats,
  MoneyManagement, MoneyDetail, MoneyAdd
- Local transaction store with sample data and an `addTransaction` action
- Theme tokens (colors, spacing, typography, radii, fonts) from `DESIGN.md` in
  `src/theme.ts`
