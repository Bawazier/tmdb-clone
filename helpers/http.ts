import axios from "axios";

const URL_API = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const url = new URL(URL_API || "");
url.searchParams.set("api_key", API_KEY || "");

type attaributeUrl = {
  pathname: string;
  language?: string;
  page?: string;
  region?: string;
};

const http = ({
  pathname,
  language = "en-US",
  page = "1",
  region = "US",
}: attaributeUrl) => {
  url.pathname = `/3${pathname}`;
  url.searchParams.set("language", language);
  url.searchParams.set("page", page);
  url.searchParams.set("region", region);

  return axios.get(url.toString());
};

export default http;
