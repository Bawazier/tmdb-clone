import http from "../../helpers/http";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// General Features
export const top_rated = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/top_rated?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data;
};
export const on_air = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/upcoming?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data;
};
export const airing_today = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/now_playing?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data;
};
export const popular = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/popular?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data;
};
