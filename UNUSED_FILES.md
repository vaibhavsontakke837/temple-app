# Unused Files and Folders in Temple App

## UNUSED ROOT FILES (Using Expo Router, not traditional React Native)
- `App.js` - NOT USED (Expo Router uses app/_layout.tsx)
- `index.js` - NOT USED (Expo Router entry point is automatic)

## UNUSED FOLDERS (Legacy Navigation - You're using Expo Router now)
- `/navigation/` - ENTIRE FOLDER NOT USED
  - `EventsStack.js`
  - `HomeStack.js`
  - `MainDrawer.js`
  - `MainTabs.js`
  - `WebNav.js`

## UNUSED SCREENS FOLDER (Duplicates of /app routes)
- `/screens/` - ENTIRE FOLDER NOT USED (replaced by /app directory)
  - `AartiScreen.js`
  - `AboutTempleScreen.js`
  - `AudioVideoScreen.js`
  - `ContactScreen.js`
  - `DonationScreen.js`
  - `EventDetailsScreen.js`
  - `EventGalleryScreen.js`
  - `EventsScreen.js`
  - `FacilitiesScreen.js`
  - `GalleryScreen.js`
  - `GodsChamatkarScreen.js`
  - `HistoricalPlacesScreen.js`
  - `HomeScreen.js`
  - `SettingsScreen.js`

## UNUSED WEB FOLDER
- `/web/` - ENTIRE FOLDER (Expo Router handles web automatically)
  - `web/src/components/ButtonPrimary.js`
  - `web/src/components/Card.js`
  - `web/src/components/IconGrid.js`
  - `web/src/components/IconTile.js`
  - `web/src/components/SectionHeader.js`
  - `web/src/styles/theme.css`

## UNUSED COMPONENTS (Not imported anywhere)
- `components/Card.js` - Duplicate exists in mobile/
- `components/external-link.js` - Expo template leftover
- `components/haptic-tab.js` - Expo template leftover
- `components/hello-wave.js` - Expo template leftover
- `components/parallax-scroll-view.js` - Expo template leftover
- `components/themed-text.js` - Expo template leftover
- `components/themed-view.js` - Expo template leftover
- `components/ui/collapsible.js` - Expo template leftover
- `components/ui/icon-symbol.ios.js` - Expo template leftover
- `components/ui/icon-symbol.js` - Expo template leftover

## UNUSED MOBILE COMPONENTS
- `components/mobile/CustomDrawer.js` - Old navigation component
- `components/mobile/dark.js` - Unknown purpose

## UNUSED HOOKS
- `hooks/useFonts.js` - Not imported
- `hooks/useTheme.js` - Using ThemeContext instead
- `hooks/use-color-scheme.ts` - Expo template leftover
- `hooks/use-color-scheme.web.ts` - Expo template leftover
- `hooks/use-theme-color.ts` - Expo template leftover

## UNUSED CONTEXT
- `context/ThemeProvider.js` - Duplicate (ThemeContext.js is used)

## UNUSED CONSTANTS
- `constants/colors.ts` - Duplicate (styles/colors.js exists)
- `constants/config.ts` - Check if imported
- `constants/data.ts` - Check if imported
- `constants/theme.ts` - Duplicate (styles/theme.js exists)

## UNUSED STYLES
- `styles/globalStyles.js` - Not imported
- `styles/commonStyles.ts` - Duplicate of common.js

## UNUSED SERVICES
- `services/api.ts` - Empty or not used
- `services/notifications.ts` - Removed expo-notifications plugin

## UNUSED UTILS
- `utils/initEventNotifications.js` - Missing file
- `utils/notifications.js` - Missing file
- `utils/scheduleEventNotification.js` - Missing file

## UNUSED DEPENDENCIES (in package.json)
- `react-native-maps` - Installed but not used
- `@react-navigation/bottom-tabs` - Using Expo Router
- `@react-navigation/drawer` - Using Expo Router
- `@react-navigation/elements` - Using Expo Router
- `@react-navigation/native` - Using Expo Router
- `expo-media-library` - Not used
- `react-native-worklets` - Not used

## FILES CREATED FOR TESTING
- `app/test.tsx` - Test file created earlier
- `FIX_EXPO_GO.md` - Documentation file

## SUMMARY
Total unused:
- 2 root files
- 4 entire folders (/navigation, /screens, /web, /utils partially)
- ~40+ component/screen files
- ~10 hook files
- Multiple duplicate style/constant files
- Several unused npm packages
