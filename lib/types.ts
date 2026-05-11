export type Category =
  | "ai-chat"
  | "ai-image"
  | "ai-video"
  | "ai-audio"
  | "ai-code"
  | "ai-productivity"
  | "ai-design"
  | "ai-research"
  | "3d-marketplace"
  | "vpn"
  | "proxy"
  | "gift-card"
  | "subscription"
  | "streaming"
  | "music"
  | "education"
  | "security"
  | "finance"
  | "gaming"
  | "seo-tools"
  | "tools";

export type Tariff = {
  name: string;
  period: string;
  priceUsd: number;
  oldPriceUsd?: number;
  note?: string;
  popular?: boolean;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  name: string;
  nameFa: string;
  category: Category;
  shortFa: string;
  taglineFa: string;
  descriptionFa: string;
  features: string[];
  tariffs: Tariff[];
  brandColor: string;
  brandTextColor?: string;
  monogram: string;
  imageUrl?: string;
  popular?: boolean;
  bestseller?: boolean;
  region?: string;
  faq?: FaqItem[];
};

export type CategoryDef = {
  slug: Category;
  nameFa: string;
  subtitleFa: string;
  descriptionFa: string;
  accent: string;
  group: "ai" | "3d" | "access" | "extras" | "media" | "learn" | "protect" | "finance";
};
