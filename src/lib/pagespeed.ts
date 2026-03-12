export type PSIScores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export type PSIData = {
  desktop: PSIScores;
  mobile: PSIScores;
};

type PSICategory = { score: number | null };
type PSIResponse = {
  lighthouseResult?: {
    categories?: {
      performance?: PSICategory;
      accessibility?: PSICategory;
      "best-practices"?: PSICategory;
      seo?: PSICategory;
    };
  };
};

function extractScores(data: PSIResponse): PSIScores {
  const cats = data.lighthouseResult?.categories ?? {};
  return {
    performance: Math.round((cats.performance?.score ?? 0) * 100),
    accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((cats["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((cats.seo?.score ?? 0) * 100),
  };
}

export async function getPageSpeedScores(
  url: string,
): Promise<PSIData | null> {
  // Skip in dev — PSI can't reach localhost and it slows down the dev server
  if (process.env.NODE_ENV !== "production") return null;

  const apiKey = process.env.GOOGLE_PSI_API_KEY;
  const base = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const cats =
    "category=performance&category=accessibility&category=best-practices&category=seo";
  const key = apiKey ? `&key=${apiKey}` : "";
  const encodedUrl = encodeURIComponent(url);

  try {
    const [mobileRes, desktopRes] = await Promise.all([
      fetch(`${base}?url=${encodedUrl}&strategy=mobile&${cats}${key}`, {
        next: { revalidate: 86400 },
      }),
      fetch(`${base}?url=${encodedUrl}&strategy=desktop&${cats}${key}`, {
        next: { revalidate: 86400 },
      }),
    ]);

    if (!mobileRes.ok || !desktopRes.ok) return null;

    const [mobileData, desktopData] = (await Promise.all([
      mobileRes.json(),
      desktopRes.json(),
    ])) as [PSIResponse, PSIResponse];

    return {
      mobile: extractScores(mobileData),
      desktop: extractScores(desktopData),
    };
  } catch {
    return null;
  }
}
