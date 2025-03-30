import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'koteiou.pages.dev',
  subtitle: 'yuita のブログ',
  lang: 'ja',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 190,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    {
      src: '/favicon/favicon.svg'
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.About,
    {
      name: '🐦 Twitter',
      url: 'https://twitter.com/koteiou',
      external: true,
    },
    {
      name: '🎥 Twitch',
      url: 'https://www.twitch.tv/yuitaaaaa',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'yuita',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [
    // Visit https://icones.js.org/ for icon codes
    // `pnpm add @iconify-json/<icon-set-name>`
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/koteiou',
    },
    {
      name: 'Twitch',
      icon: 'fa6-brands:twitch',
      url: 'https://www.twitch.tv/yuitaaaaa',
    },
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/@yuita',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/profiles/76561199572949580/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
