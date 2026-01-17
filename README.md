# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

```
temple-app
├─ 📁.expo
├─ 📁.vscode
│  ├─ 📄extensions.json
│  └─ 📄settings.json
├─ 📁app
│  ├─ 📁about
│  ├─ 📁admin
│  ├─ 📁donation
│  ├─ 📁songs
│  ├─ 📄aarti.tsx
│  ├─ 📄contact.tsx
│  ├─ 📄donation.tsx
│  ├─ 📄event.tsx
│  ├─ 📄gallery.tsx
│  ├─ 📄Home.tsx
│  ├─ 📄modal.tsx
│  ├─ 📄settings.tsx
│  ├─ 📄splash.tsx
│  └─ 📄_layout.tsx
├─ 📁assets
│  ├─ 📁audio
│  │  └─ 📄aarti1.mp3
│  ├─ 📁fonts
│  └─ 📁gallery
│     ├─ 📁audio
│     ├─ 📁banners
│     │  ├─ 📄banner1.webp
│     │  ├─ 📄banner2.jpg
│     │  ├─ 📄gallery1.jpg
│     │  └─ 📄gallery2.jpg
│     ├─ 📄1.jpg
│     ├─ 📄2.jpg
│     ├─ 📄3.jpg
│     ├─ 📄4.jpg
│     ├─ 📄5.jpg
│     ├─ 📄6.jpg
│     ├─ 📄android-icon-background.png
│     ├─ 📄android-icon-foreground.png
│     ├─ 📄android-icon-monochrome.png
│     ├─ 📄favicon.png
│     ├─ 📄icon.png
│     ├─ 📄partial-react-logo.png
│     ├─ 📄react-logo.png
│     ├─ 📄react-logo@2x.png
│     ├─ 📄react-logo@3x.png
│     └─ 📄splash-icon.png
├─ 📁components
│  ├─ 📁mobile
│  │  ├─ 📄AartiCard.js
│  │  ├─ 📄AppCard.js
│  │  ├─ 📄AppHeader.js
│  │  ├─ 📄ButtonPrimary.js
│  │  ├─ 📄CustomDrawer.js
│  │  ├─ 📄CustomDrawerContent.js
│  │  ├─ 📄EventCard.js
│  │  ├─ 📄IconGrid.js
│  │  ├─ 📄IconTile.js
│  │  ├─ 📄ImageCard.js
│  │  ├─ 📄LanguageCard.js
│  │  ├─ 📄MediaCard.js
│  │  ├─ 📄ScreenContainer.js
│  │  ├─ 📄SectionHeader.js
│  │  └─ 📄TimingCard.js
│  ├─ 📁ui
│  │  ├─ 📄collapsible.js
│  │  ├─ 📄icon-symbol.ios.js
│  │  └─ 📄icon-symbol.js
│  ├─ 📄Card.js
│  ├─ 📄external-link.js
│  ├─ 📄haptic-tab.js
│  ├─ 📄HeaderBanner.js
│  ├─ 📄hello-wave.js
│  ├─ 📄IconButton.js
│  ├─ 📄parallax-scroll-view.js
│  ├─ 📄SectionTitle.js
│  ├─ 📄themed-text.js
│  └─ 📄themed-view.js
├─ 📁constants
│  ├─ 📄colors.ts
│  ├─ 📄config.ts
│  ├─ 📄data.ts
│  └─ 📄theme.ts
├─ 📁context
│  ├─ 📄ThemeContext.js
│  └─ 📄ThemeProvider.js
├─ 📁data
│  └─ 📄aarti.js
├─ 📁hooks
│  ├─ 📄use-color-scheme.ts
│  ├─ 📄use-color-scheme.web.ts
│  └─ 📄use-theme-color.ts
├─ 📁i18n
│  ├─ 📄en.json
│  ├─ 📄index.js
│  └─ 📄mr.json
├─ 📁navigation
│  ├─ 📄EventsStack.js
│  ├─ 📄HomeStack.js
│  ├─ 📄MainDrawer.js
│  ├─ 📄MainTabs.js
│  └─ 📄WebNav.js
├─ 📁node_modules
├─ 📁screens
│  ├─ 📄AartiScreen.js
│  ├─ 📄AboutTempleScreen.js
│  ├─ 📄AudioVideoScreen.js
│  ├─ 📄ContactScreen.js
│  ├─ 📄DonationScreen.js
│  ├─ 📄EventDetailsScreen.js
│  ├─ 📄EventsScreen.js
│  ├─ 📄GalleryScreen.js
│  ├─ 📄HomeScreen.js
│  └─ 📄SettingsScreen.js
├─ 📁scripts
│  └─ 📄reset-project.js
├─ 📁services
│  ├─ 📄api.ts
│  └─ 📄notifications.ts
├─ 📁shared
│  ├─ 📄events.js
│  ├─ 📄gallery.js
│  └─ 📄templeInfo.js
├─ 📁styles
│  ├─ 📄colors.js
│  ├─ 📄common.js
│  ├─ 📄commonStyles.ts
│  ├─ 📄layout.js
│  ├─ 📄spacing.ts
│  ├─ 📄theme.js
│  └─ 📄typography.ts
├─ 📁utils
│  ├─ 📄date.js
│  ├─ 📄formatTime.ts
│  ├─ 📄helpers.ts
│  ├─ 📄initEventNotifications.js
│  ├─ 📄notifications.js
│  └─ 📄scheduleEventNotification.js
├─ 📁web
│  └─ 📁src
│     ├─ 📁components
│     │  ├─ 📄ButtonPrimary.js
│     │  ├─ 📄Card.js
│     │  ├─ 📄IconGrid.js
│     │  ├─ 📄IconTile.js
│     │  └─ 📄SectionHeader.js
│     └─ 📁styles
│        └─ 📄theme.css
├─ 📄.gitignore
├─ 📄App.js
├─ 📄app.json
├─ 📄eslint.config.js
├─ 📄i18n.js
├─ 📄index.js
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
└─ 📄tsconfig.json
```
```
temple-app
├─ 📁.expo
├─ 📁.vscode
│  ├─ 📄extensions.json
│  └─ 📄settings.json
├─ 📁app
│  ├─ 📁about
│  ├─ 📁admin
│  ├─ 📁donation
│  ├─ 📁songs
│  ├─ 📄aarti.tsx
│  ├─ 📄contact.tsx
│  ├─ 📄donation.tsx
│  ├─ 📄event.tsx
│  ├─ 📄gallery.tsx
│  ├─ 📄Home.tsx
│  ├─ 📄modal.tsx
│  ├─ 📄settings.tsx
│  ├─ 📄splash.tsx
│  └─ 📄_layout.tsx
├─ 📁assets
│  ├─ 📁audio
│  │  └─ 📄aarti1.mp3
│  ├─ 📁fonts
│  └─ 📁gallery
│     ├─ 📁audio
│     ├─ 📁banners
│     │  ├─ 📄banner1.webp
│     │  ├─ 📄banner2.jpg
│     │  ├─ 📄gallery1.jpg
│     │  └─ 📄gallery2.jpg
│     ├─ 📄1.jpg
│     ├─ 📄2.jpg
│     ├─ 📄3.jpg
│     ├─ 📄4.jpg
│     ├─ 📄5.jpg
│     ├─ 📄6.jpg
│     ├─ 📄android-icon-background.png
│     ├─ 📄android-icon-foreground.png
│     ├─ 📄android-icon-monochrome.png
│     ├─ 📄favicon.png
│     ├─ 📄icon.png
│     ├─ 📄partial-react-logo.png
│     ├─ 📄react-logo.png
│     ├─ 📄react-logo@2x.png
│     ├─ 📄react-logo@3x.png
│     └─ 📄splash-icon.png
├─ 📁components
│  ├─ 📁mobile
│  │  ├─ 📄AartiCard.js
│  │  ├─ 📄AppCard.js
│  │  ├─ 📄AppHeader.js
│  │  ├─ 📄ButtonPrimary.js
│  │  ├─ 📄CustomDrawer.js
│  │  ├─ 📄CustomDrawerContent.js
│  │  ├─ 📄EventCard.js
│  │  ├─ 📄IconGrid.js
│  │  ├─ 📄IconTile.js
│  │  ├─ 📄ImageCard.js
│  │  ├─ 📄LanguageCard.js
│  │  ├─ 📄MediaCard.js
│  │  ├─ 📄ScreenContainer.js
│  │  ├─ 📄SectionHeader.js
│  │  └─ 📄TimingCard.js
│  ├─ 📁ui
│  │  ├─ 📄collapsible.js
│  │  ├─ 📄icon-symbol.ios.js
│  │  └─ 📄icon-symbol.js
│  ├─ 📄Card.js
│  ├─ 📄external-link.js
│  ├─ 📄haptic-tab.js
│  ├─ 📄HeaderBanner.js
│  ├─ 📄hello-wave.js
│  ├─ 📄IconButton.js
│  ├─ 📄parallax-scroll-view.js
│  ├─ 📄SectionTitle.js
│  ├─ 📄themed-text.js
│  └─ 📄themed-view.js
├─ 📁constants
│  ├─ 📄colors.ts
│  ├─ 📄config.ts
│  ├─ 📄data.ts
│  └─ 📄theme.ts
├─ 📁context
│  ├─ 📄ThemeContext.js
│  └─ 📄ThemeProvider.js
├─ 📁data
│  └─ 📄aarti.js
├─ 📁hooks
│  ├─ 📄use-color-scheme.ts
│  ├─ 📄use-color-scheme.web.ts
│  └─ 📄use-theme-color.ts
├─ 📁i18n
│  ├─ 📄en.json
│  ├─ 📄index.js
│  └─ 📄mr.json
├─ 📁navigation
│  ├─ 📄EventsStack.js
│  ├─ 📄HomeStack.js
│  ├─ 📄MainDrawer.js
│  ├─ 📄MainTabs.js
│  └─ 📄WebNav.js
├─ 📁node_modules
├─ 📁screens
│  ├─ 📄AartiScreen.js
│  ├─ 📄AboutTempleScreen.js
│  ├─ 📄AudioVideoScreen.js
│  ├─ 📄ContactScreen.js
│  ├─ 📄DonationScreen.js
│  ├─ 📄EventDetailsScreen.js
│  ├─ 📄EventsScreen.js
│  ├─ 📄GalleryScreen.js
│  ├─ 📄HomeScreen.js
│  └─ 📄SettingsScreen.js
├─ 📁scripts
│  └─ 📄reset-project.js
├─ 📁services
│  ├─ 📄api.ts
│  └─ 📄notifications.ts
├─ 📁shared
│  ├─ 📄events.js
│  ├─ 📄gallery.js
│  └─ 📄templeInfo.js
├─ 📁styles
│  ├─ 📄colors.js
│  ├─ 📄common.js
│  ├─ 📄commonStyles.ts
│  ├─ 📄layout.js
│  ├─ 📄spacing.ts
│  ├─ 📄theme.js
│  └─ 📄typography.ts
├─ 📁utils
│  ├─ 📄date.js
│  ├─ 📄formatTime.ts
│  ├─ 📄helpers.ts
│  ├─ 📄initEventNotifications.js
│  ├─ 📄notifications.js
│  └─ 📄scheduleEventNotification.js
├─ 📁web
│  └─ 📁src
│     ├─ 📁components
│     │  ├─ 📄ButtonPrimary.js
│     │  ├─ 📄Card.js
│     │  ├─ 📄IconGrid.js
│     │  ├─ 📄IconTile.js
│     │  └─ 📄SectionHeader.js
│     └─ 📁styles
│        └─ 📄theme.css
├─ 📄.gitignore
├─ 📄App.js
├─ 📄app.json
├─ 📄eslint.config.js
├─ 📄i18n.js
├─ 📄index.js
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
└─ 📄tsconfig.json
```