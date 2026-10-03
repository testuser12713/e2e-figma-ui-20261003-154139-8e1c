# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Freundliches Fintech-Portfolio der Business-Handler-Frames: Grün #6CC57C als Vertrauens-Akzent auf kühlem Hellgrau-Blau #F4F5FA, weiße Karten mit weichen Schatten (0/3 blur 16–40) und großzügigen Radien (3–20px), Serifen-Headlines in Aleo gegen sachliches Inter – ruhig, luftig, mobile-first.

## Colors

- `--color-bg`: **#F4F5FA**
- `--color-bg-alt`: **#F4F4F4**
- `--color-panel`: **#ECF1FA**
- `--color-surface`: **#FFFFFF**
- `--color-surface-subtle`: **#DCE5F4**
- `--color-fg`: **#23233C**
- `--color-text-strong`: **#1C1C1C**
- `--color-secondary`: **#23233C**
- `--color-accent`: **#6CC57C**
- `--color-accent-light`: **#61D27C**
- `--color-accent-gradient-end`: **#179F2F**
- `--color-accent-soft`: **#6CC57CD9**
- `--color-on-accent`: **#FFFFFF**
- `--color-deposit`: **#2B2B2B**
- `--color-border`: **#707070**
- `--color-divider`: **#E3E3E3**
- `--color-icon-inactive`: **#BBC7DB**
- `--color-chevron`: **#181461**
- `--color-muted`: **#A5A5A5**
- `--color-muted-alt`: **#8D8D8D**
- `--color-faint`: **#B4B4B4**
- `--color-link-muted`: **#898888**
- `--color-accent-line`: **#C48B30**
- `--color-facebook`: **#0F279E**
- `--color-shadow-tint`: **#60719329**

## Typography

- `font_family`: Inter, -apple-system, 'SF Pro Text', Roboto, sans-serif
- `font_family_display`: Aleo, Georgia, 'Times New Roman', serif
- `font_family_accent`: Ubuntu, 'Segoe UI', Roboto, sans-serif
- `font_family_login`: Actor, Inter, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `label_weight`: 100
- `eyebrow`: Inter 100 12px/15px, letter-spacing 2.4px, uppercase
- `eyebrow-small`: Inter 100 9px/11px, letter-spacing 1.8px, uppercase
- `hero-number`: Inter 500 45px/57px, uppercase
- `title-xl`: Aleo 700 40px/51px ('Welcome')
- `title-lg`: Aleo 700 25px/32px (Onboarding-Headline), Slide 2: 25px/30px
- `title-md`: Aleo 700 24px/29px (Add an appointment)
- `title-sm`: Aleo 700 16px/19px ('My Appointments')
- `body`: Inter 400 16px/19px
- `body-sm`: Inter 400 14px/18px bzw. 13px/17px
- `caption`: Inter 100 12px/15px bzw. 10px/13px
- `tab-label`: Aleo 700 7px/5px

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 40px
- `--space-5`: 45px
- `--space-6`: 50px

## Border-Radii

- `--radius-sm`: 3px
- `--radius-md`: 5px
- `--radius-lg`: 8px
- `--radius-xl`: 10px
- `--radius-2xl`: 12px
- `--radius-3xl`: 18px
- `--radius-card`: 20px
- `--radius-pill`: 999px

## Components

### Button (Primary, grün)

Frames: 'Add Expense'/'Add Appointment' 334×43, 'Add a new appointment' 336×43, Onboarding-'Next' 115×42, jeweils fill #6CC57C, radius 8, zentriertes Label Inter 400 16px/19px #FFFFFF (Onboarding: Inter 400 15px/19px), shadow 0 3 16 #00000014, Touch-Target ≥44px über Hit-Slop. States (Frames zeigen nur static, im Frame-Stil ergänzt): default #6CC57C; hover #7CCF8C (Accent +6% Helligkeit), Cursor pointer; active #5CB66C (Accent −6%) + scale 0.98; disabled fill #6CC57C @45% opacity, Label @70% opacity, kein Shadow; focus-visible 2px Ring #6CC57C @35% außen, offset 2px.

### Button (Secondary/Soft)

Frame 'Overview': fill #6CC57CD9 (Accent @85%), 336×43, radius 8, Label Inter 400 16px/19px #FFFFFF, shadow 0 3 16 #00000014. States: hover #6CC57C (voll), active #5CB66C, disabled @40% opacity. 'Skip step'-Link dagegen kein Button: Inter 400 15px/19px #B4B4B4, Touch-Target 44×44.

### Button (Dark, Login)

Frame Login: 333×54, fill #23233C, radius 18, Label Aleo 700 20px/25px #FFFFFF zentriert (x=42, y=529). States: default #23233C; hover #2E2E4C; active #1A1A2E + scale 0.99; disabled #23233C @50% opacity; focus Ring 2px #6CC57C @40%.

### InputField (Login)

336×54, fill #FFFFFF, radius 5, shadow 0 10 10 #0D4E810D; Text/Placeholder Actor 400 14px/18px #23233C zentriert (Frames: 'mauricio@divelement.io', '***********'); Positionswerte aus Frame: y=321 und y=411. Zustände ergänzt: focus Border 1px #6CC57C + Shadow wie default; error Border 1px #707070, Hilfetext Inter 400 13px/17px #8D8D8D; disabled bg #F4F4F4 @60% opacity.

### InputField (Formular)

334×43 (Money Management 3: Name/Beschreibung/Amount/Select Date), fill #FFFFFF, radius 5–8 (Frame: weiche Rechtecke, 5px Marge-Ecke), shadow 0 3 16 #00000014, Text Inter 400 16px/19px #1C1C1C, x-Rand 38px im Feld (Frame x=77 bei Feld x=40), optionales 14–16px Icon #23233C links bei x=15–17 im Feld; vertikaler Abstand 63px zwischen den Feldern (Frames y=176/239/302/365). States ergänzt: focus 1px #6CC57C Border, error 1px #707070, disabled #F4F4F4.

### SearchField

334×43 (Time-Management-Frames – gleicher Baustein wie Formularfelder), fill #FFFFFF, shadow 0 3 16 #00000014, Placeholder Inter 400 16px/19px #1C1C1C (@20% opacity wenn echt inaktiv, z.B. Time Management 'Search'), Suchicon 16×16 #1C1C1C rechts im Feld (x=341) bzw. links (x=15) je Frame.

### Card (Quick Categories)

Frame Money Management: 330×276, fill #FFFFFF, radius 20, zentriert liegend (Frames: Karte y=453, Inhalt x=45..375); Eyebrow 'QUICK CATEGORIES' Inter 100 12px/15px, letter-spacing 2.4px, uppercase #000000, zentriert (Karte: Text y=487); Innenraster 2 Reihen × 3 Kacheln mit 50px horizontalem und 37px vertikalem Abstand (Kachel-x 69/175/284, Kachel-y 530/622).

### CategoryTile

55×55, fill #FFFFFF, stroke 1px #000000 dashed innen, radius 12, Glyph 36–42px optisch zentriert in #000000 (Frames: home 42×39, dish-spoon-knife 41×29, briefcase 41×34, friends 40×30, shopping-bag 36×42, gas-station 37×39 – in Figma leer gerendert, daher als eigene Linien-Icons im Stil der übrigen Frames zeichnen). States ergänzt: hover Hintergrund #F4F5FA, active scale 0.97, focus Ring 2px #6CC57C @35%.

### BalanceHero (Money Management Kopf)

Weiße Fläche 414×406 (#FFFFFF) mit Wave-Illustration design/figma/assets/illustration-525x387.png bei [-73,-74 525×387]; Avatar-Badge 51×51 bei [296,77], fill #6CC57C, pill, shadow 0 3 6 #00000029, Text 'R' Aleo 700 32px/41px #FFFFFF; Eyebrow 'MONTHLY EXPENSES' Inter 100 12px/15px ls 2.4px uppercase #000000 bei [49,282]; Betrag '1,345.00€' Inter 500 45px/57px uppercase #000000 bei [49,298]; Unterkante der weißen Fläche mit weichem Bogen in die Fläche #F4F4F4.

### BarChart (Weekly Report)

Frame Money Management 2: 7 Balken im Bereich [74,110 320×230], Balkenbreite 13px, Abstand 22px; Track-Segment oben #E3E3E3, Segment 'expenses' #6CC57C, Segment 'deposit' #2B2B2B, Radius 0, keine Achsen/Gitter; Legende bei [74,358 140×13]: Quadrat 13×13 radius 3 (#6CC57C 'expenses' / #2B2B2B 'deposit') + Label Inter 100 9px/11px uppercase #000000, 84px horizontaler Abstand der Einträge.

### TransactionRow

Höhe 83px (Frames y=436/519/602/685), volle Inhaltsbreite; links Illustration 53×53 (weiße Karte mit schwarzem Glyph, design/figma/assets/illustration-53x53*.png); Textspalte x=103: Kategorie-Eyebrow Inter 100 9px/11px ls 1.8px uppercase #000000, Titel Inter 100 12px/15px #000000, Datum Inter 100 9px/11px uppercase #000000; Betrag rechtsbündig Inter 100 14px/18px #000000 (x=308); kein Divider. States ergänzt: pressed Hintergrund #F4F5FA, focus Ring 2px #6CC57C @35%; Touch-Target ≥44px.

### BottomTabBar + FAB

Bar 413×77 #FFFFFF, shadow 0 3 20 #60719329, fix am unteren Rand (y=819), Safe-Area darunter; 5 Slots, inaktive Icons 18–22px und Labels Aleo 700 7px/5px #BBC7DB (Frames: Home 22×21, shop 19×19, Liked 20×18, user-check 15×18); zentraler FAB: Ellipse 64×63 bei [179,778], fill linear-gradient(180deg, #6CC57C 0%, #179F2F 100%), stroke 4px #FFFFFF innen, shadow 0 3 40 #00000029, Plus aus zwei Linien (20×3px und 3×20px) #FFFFFF; FAB ragt 41px über die Bar hinaus. States ergänzt: aktiver Tab Icon+Label #6CC57C, inaktiv #BBC7DB, pressed scale 0.96.

### ScreenHeader

Back-Chevron 11×18 #181461 bei x=22–47 (Money Management) bzw. 40 (Time Management), y=25–29, unsichtbares 44×44 Touch-Pad; Titelvarianten exakt aus den Frames: Eyebrow-Titel zentriert Inter 100 14px/18px ls 2.8px uppercase #000000 ('WEEKLY REPORT', 'ADD EXPENSE'), Serifen-Titel links Aleo 700 16px/19px #1C1C1C ('My Appointments') bzw. Aleo 700 24px/29px #23233C ('Add an appointment'); Header-Fläche #FFFFFF (Höhe 138px bei Money Management 3, 126px bei Time Management 3, shadow 0 3 16 #0000001A); Avatar/User-Icon 27×27 #23233C bzw. #181461 oben rechts, Touch-Target 44×44.

### SocialLoginButton

Frame Login: 82×51, fill #FFFFFF, radius 10, shadow 0 0 10 #0000000F, Icon 24×24 (Facebook #0F279E, Google als design/figma/assets/search-1.png), zwei Buttons 21px Abstand (x=115 und x=218, y=649). States ergänzt: hover #F4F5FA, active scale 0.98, disabled @50% opacity, focus Ring 2px #6CC57C @35%.

### OnboardingSlide

Vollflächiges Foto (design/figma/assets/jo-sonn-m-tzzd5z720-unsplash.png), darüber Grünfläche #6CC57C @47% opacity ([-97,332 527×552]) und Panel #F4F5FA ([-90,344 527×552]) mit oberer Rundung; Inhalt [45,617 332×250]: Dots 10×10 mit 11px Abstand (aktiv #61D27C, inaktiv #E3E3E3), Headline Aleo 700 25px/32px #23233C (Slide 2: 25px/30px, #6CC57C, zentriert), Body Inter 400 10px/13px #A5A5A5 zentriert (max. 3 Zeilen), 'Skip step' Inter 400 15px/19px #B4B4B4, 'Next' 115×42 fill #6CC57C radius 8 Label Inter 400 15px/19px #FFFFFF rechts (x=251); Slide 2 zusätzlich '1/1 steps' Inter 400 16px/20px #000000 @54% und Dark-Round-Button 56×56 #23233C mit Doppel-Chevron #FFFFFF.

### TextLink / Helper-Text

'Forgot you password?' Inter 400 13px/17px #8D8D8D zentriert bei [139,489]; 'Don't have an account? sign up' Aleo 700 13px/17px #898888C9 zentriert bei [119,602]; Touch-Target per Hit-Slop auf 44px erhöht. States ergänzt: hover #23233C, focus Ring 2px #6CC57C @35%.

### IconSet (Frame-Assets + selbst gezeichnet)

Übernehmen wie in den Frames: design/figma/assets/noun-back-1227057.png (11×18 #181461), noun-user-1335326.png (27×27), noun-pencil-2174975.png / noun-info-1174604.png (12×12), facebook-2.png, search-1.png, icon-32x32.png (32×32). In Figma leer gerendert und daher selbst zu zeichnen – Strichstärke ~1.5–2px in der Icon-Farbe des Frames: noun_menu_933312 (18×15 #181461), noun_Search_860389 (16×16 #23233C/#1C1C1C), noun_Map_2404959 (14×18), Kalender-/Datums-Icon (15×16), view/check im Login (#23233C), Plus im FAB, Chips home/dish-spoon-knife/briefcase/friends/shopping-bag/gas-station in #000000 bei 36–42px. Kategorie: Kachel-Icons 36–42px, UI-Icons 15–27px, Tab-Icons 18–22px.

### DashboardScreen-Bausteine (Menu & Stats)

Die Dashboard-Frames sind die Quelle, es werden keine eigenen Werte erfunden: Kennzahlen- und Übersichtskarten in #FFFFFF mit den Radien und Shadows der Frames, Eyebrow-Labels im Inter-100-12px-Stil (letter-spacing 2.4px, uppercase #000000), Zahlen in Aleo 700, Icon-Zugänge zu 'Dashboard Menu' und 'Dashboard Stats' als 44×44 Touch-Targets oben rechts (Icon 27×27 #23233C). Ergänzt nur, was die Frames offen lassen: Menü als Sheet fill #FFFFFF radius 20 von unten über Scrim #23233C @40%, Stats-Ansicht als gestapelter Screen mit Back-Chevron 11×18 #181461; Ein-/Ausblenden 200ms ease-out, Sheet translateY 100% → 0.

### ScreenLayouts (414×896)

Login/Onboarding: Vollbild, keine Tab-Bar, Slides horizontal swipebar (Paging, 300ms ease-out), Buttons wie oben. Dashboard: weiße Kopfkarte + #F4F5FA Fläche, Bottom-Tab-Bar aktiv. Money Management: BalanceHero 414×406, Quick-Categories-Karte y=453, Tab-Bar mit FAB; Money Management 2: weiße Chart-Fläche 414×407, Liste ab y=436, Tab-Bar mit FAB; Money Management 3: weißer Header 138px, Formularfelder y=176–408, grüner Submit y=437, Tab-Bar. Alle Screens scrollen nur vertikal innerhalb des 414×896-Rahmens, kein horizontales Scrollen.

## Layout Principles

- Ein einziger Viewport: 414×896 (Phone, Portrait). Keine Breakpoints, kein max-width-Container, keine Web-Layouts – die Frame-Werte sind absolute Pixel.
- Horizontaler Inhaltsrand 40px (Frames: x=39–45), Inhaltsbreite 334–336px; Sektionsabstand 45px, Karten-Innenabstand 24–35px.
- Kopfbereich: obere Safe-Area ~25px frei; Back-Chevron links (x=22–47) mit 44×44 Touch-Pad, Titel zentriert (Inter-100-Eyebrow) oder links (Aleo 700) je Frame.
- Bottom-Tab-Bar fix am unteren Rand: Bar 77px #FFFFFF + Safe-Area darunter; FAB 64×63 zentriert, ragt 41px über die Bar (y=778) und überlagert den Inhalt.
- Bildschirmaufbau in Blöcken: weiße Kopf-/Heldenfläche oben, darunter #F4F4F4 bzw. #F4F5FA; Inhalte in weißen Karten mit Radius 20 und weichen Schatten (0/3 blur 16–40).
- Abstandsskala 4/8/16/24/40/45/50px aus den Frame-Positionen; Formularfelder im 63px-Raster (y=176/239/302/365), Listenzeilen 83px hoch.
- Navigation wie in den Frames: Onboarding-Slides horizontal swipebar plus Next/Skip, gestapelte Screens mit Back-Chevron, Bottom-Tab-Bar zwischen Dashboard und Money Management, Menü und Stats als Sheet/Overlay.
- Keine Top-Navigation, keine Sidebar, kein Desktop-Raster – nur was die Frames zeigen (Header, Karten, Listen, Tab-Bar, FAB).
- Kontrast: Text immer #23233C/#1C1C1C auf #FFFFFF bzw. #F4F5FA; auf Grün #6CC57C ausschließlich #FFFFFF; inaktive Tab-Elemente #BBC7DB nur auf Weiß; Beträge und Zahlen rechtsbündig, Karten ausgerichtet am 40px-Raster.

## Source Frames

This design was taken from the Figma frames below. They are the reference; the tokens above were read from them. Each frame's spec carries its exact positions, sizes, colours, fonts and texts; `design/figma/README.md` is the index.

Platform: mobile app (`mobile-app`) — design viewport 414×896 (phone, portrait) — one viewport, the design is not responsive.

- **Money Management** · businesshandler — spec `design/figma/money-management.md` — `design/figma/money-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2446
- **Money Management 2** · businesshandler — spec `design/figma/money-management-2.md` — `design/figma/money-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2573
- **Money Management 3** · businesshandler — spec `design/figma/money-management-3.md` — `design/figma/money-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2673
- **Time Management** · businesshandler — spec `design/figma/time-management.md` — `design/figma/time-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-803
- **Time Management - 2** · businesshandler — spec `design/figma/time-management-2.md` — `design/figma/time-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-3047
- **Time Management - 3** · businesshandler — spec `design/figma/time-management-3.md` — `design/figma/time-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1029
- **Login** · businesshandler — spec `design/figma/login.md` — `design/figma/login.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-81
- **Login Slide** · businesshandler — spec `design/figma/login-slide.md` — `design/figma/login-slide.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-20
- **Login Slide 2** · businesshandler — spec `design/figma/login-slide-2.md` — `design/figma/login-slide-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-208
- **Dashboard** · businesshandler — spec `design/figma/dashboard.md` — `design/figma/dashboard.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-681
- **Dashboard Menu** · businesshandler — spec `design/figma/dashboard-menu.md` — `design/figma/dashboard-menu.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2973
- **Dashboard Stats** · businesshandler — spec `design/figma/dashboard-stats.md` — `design/figma/dashboard-stats.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-900
