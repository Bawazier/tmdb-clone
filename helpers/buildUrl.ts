const URL_API = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Params {
  language?: string;
  page?: number;
  region?: string;
}

export function buildURL(pathname: string, params?: Params): URL {
  const url = new URL(URL_API || "");
  url.pathname = `/3${pathname}`;

  const searchParams = new URLSearchParams();
  searchParams.append("api_key", API_KEY || "");
  if (params !== undefined) {
    searchParams.append("language", params?.language || "");
    searchParams.append("page", params?.page?.toString() || "");
    searchParams.append("region", params?.region || "");
  }

  url.search = searchParams.toString();

  return url;
}
