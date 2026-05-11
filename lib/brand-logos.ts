/**
 * Brand logo URLs mapped by service slug.
 * Logos stored in /public/logos/ (128px favicons from Google).
 * Falls back to brandColor + monogram if no logo is found.
 */

const LOGO_MAP: Record<string, string> = {
  // AI Chat
  "chatgpt-plus": "/logos/openai.png",
  "chatgpt-pro": "/logos/openai.png",
  "chatgpt-team": "/logos/openai.png",
  "claude-pro": "/logos/anthropic.png",
  "claude-max": "/logos/anthropic.png",
  "gemini-advanced": "/logos/gemini.png",
  "perplexity-pro": "/logos/perplexity.png",

  // AI Image
  "midjourney": "/logos/midjourney.png",
  "leonardo-ai": "/logos/leonardo.png",

  // AI Video
  "runway": "/logos/runwayml.png",
  "pika": "/logos/pika.png",
  "heygen": "/logos/heygen.png",

  // AI Audio
  "elevenlabs": "/logos/elevenlabs.png",
  "suno": "/logos/suno.png",

  // AI Code
  "cursor": "/logos/cursor.png",
  "github-copilot": "/logos/github.png",
  "windsurf": "/logos/codeium.png",
  "v0-dev": "/logos/vercel.png",

  // AI Productivity
  "notion-ai": "/logos/notion.png",
  "grammarly-premium": "/logos/grammarly.png",
  "jasper-ai": "/logos/jasper.png",

  // AI Design
  "canva-pro": "/logos/canva.png",
  "adobe-creative-cloud": "/logos/adobe.png",
  "figma-professional": "/logos/figma.png",
  "adobe-firefly": "/logos/adobe.png",

  // Streaming
  "netflix": "/logos/netflix.png",
  "disney-plus": "/logos/disneyplus.png",
  "hbo-max": "/logos/hbomax.png",
  "amazon-prime-video": "/logos/primevideo.png",
  "youtube-premium": "/logos/youtube.png",

  // Music
  "spotify-premium": "/logos/spotify.png",
  "apple-music": "/logos/apple.png",
  "tidal": "/logos/tidal.png",

  // VPN
  "expressvpn": "/logos/expressvpn.png",
  "outline-vpn": "/logos/outline.png",
  "nordvpn": "/logos/nordvpn.png",

  // Education
  "duolingo-plus": "/logos/duolingo.png",
  "coursera-plus": "/logos/coursera.png",
  "skillshare": "/logos/skillshare.png",
  "udemy": "/logos/udemy.png",

  // Tools & SaaS
  "linkedin-premium": "/logos/linkedin.png",
  "tradingview": "/logos/tradingview.png",
  "google-drive": "/logos/google.png",
  "dropbox": "/logos/dropbox.png",
  "zoom": "/logos/zoom.png",
  "slack": "/logos/slack.png",

  // Gaming
  "steam-wallet": "/logos/steam.png",
  "xbox-game-pass": "/logos/xbox.png",
  "playstation-plus": "/logos/playstation.png",

  // Gift Cards
  "apple-gift-card": "/logos/apple.png",

  // SEO
  "semrush": "/logos/semrush.png",
  "ahrefs": "/logos/ahrefs.png",
};

const DOMAIN_LOGO_MAP: Record<string, string> = {
  chatgpt: "/logos/openai.png",
  openai: "/logos/openai.png",
  claude: "/logos/anthropic.png",
  anthropic: "/logos/anthropic.png",
  gemini: "/logos/gemini.png",
  spotify: "/logos/spotify.png",
  netflix: "/logos/netflix.png",
  canva: "/logos/canva.png",
  adobe: "/logos/adobe.png",
  notion: "/logos/notion.png",
  figma: "/logos/figma.png",
  slack: "/logos/slack.png",
  zoom: "/logos/zoom.png",
  dropbox: "/logos/dropbox.png",
  grammarly: "/logos/grammarly.png",
  duolingo: "/logos/duolingo.png",
  udemy: "/logos/udemy.png",
  coursera: "/logos/coursera.png",
  linkedin: "/logos/linkedin.png",
  apple: "/logos/apple.png",
  google: "/logos/google.png",
  microsoft: "/logos/microsoft.png",
  github: "/logos/github.png",
  youtube: "/logos/youtube.png",
  steam: "/logos/steam.png",
  xbox: "/logos/xbox.png",
  playstation: "/logos/playstation.png",
  cursor: "/logos/cursor.png",
  midjourney: "/logos/midjourney.png",
  perplexity: "/logos/perplexity.png",
  semrush: "/logos/semrush.png",
  tradingview: "/logos/tradingview.png",
  elevenlabs: "/logos/elevenlabs.png",
  suno: "/logos/suno.png",
  runway: "/logos/runwayml.png",
  pika: "/logos/pika.png",
  heygen: "/logos/heygen.png",
  nord: "/logos/nordvpn.png",
  express: "/logos/expressvpn.png",
  disney: "/logos/disneyplus.png",
};

export function getServiceLogo(slug: string, name: string): string | null {
  if (LOGO_MAP[slug]) return LOGO_MAP[slug];

  const lower = name.toLowerCase();
  for (const [key, path] of Object.entries(DOMAIN_LOGO_MAP)) {
    if (lower.includes(key)) return path;
  }

  return null;
}
