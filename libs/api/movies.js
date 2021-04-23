import http from "../../helpers/http";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// General Features
export const top_rated = async (
  language = "en-US",
  page = 1,
  region = "US"
) => {
  const { data } = await http.get(
    "/movie/top_rated?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data;
};
export const upcoming = async (language = "en-US", page = 1, region = "US") => {
  const { data } = await http.get(
    "/movie/upcoming?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data;
};
export const now_playing = async (language = "en-US", page = 1, region = "US") => {
  const { data } = await http.get(
    "/movie/now_playing?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data;
};
export const popular = async (language = "en-US", page = 1, region = "US") => {
  const { data } = await http.get(
    "/movie/popular?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data;
};

