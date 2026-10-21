export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Chained Beasts Wiki",
  shortName: "Chained Beasts",
  logoText: "C",
  tagline: "Beasts, Builds, Bosses & Co-op Guides",
  description: "Explore Chained Beasts with beginner guides, beast unlocks, skills, afflictions, weapons, boss strategies, co-op tips, platform details, and the latest updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chainedbeast.top",
  supportEmail: "support@chainedbeast.top",
  gameUrl: "https://store.steampowered.com/app/3569420/Chained_Beasts/",
  heroVideoId: "gY7T7ywdF_8",
  social: {
    discord: "https://discord.gg/3qKKQ52P4W",
    youtube: "https://www.youtube.com/@FeatherweightGames",
    twitter: "https://x.com/_Featherweight_",
  },
  locales: ["en", "es", "pt", "de", "fr", "ja"],
  defaultLocale: "en",
};
