import http from "../../helpers/http";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// General Features
export const top_rated = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/top_rated?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const on_air = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/upcoming?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const airing_today = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/now_playing?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const popular = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/tv/popular?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};

// TV Features
export const details = async (tvId, language = "en-US") => {
  const { data } = await http.get(
    `/tv/${tvId}?` + `api_key=${API_KEY}&language=${language}`
  );

  return data;
};
export const videos = async (tvId, language = "en-US") => {
  const { data } = await http.get(
    `/tv/${tvId}/videos?` + `api_key=${API_KEY}&language=${language}`
  );

  return data.results;
};
export const recommended = async (tvId, language = "en-US", page = 1) => {
  const { data } = await http.get(
    `/tv/${tvId}/recommendations?` +
      `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const similar = async (tvId, language = "en-US", page = 1) => {
  const { data } = await http.get(
    `/tv/${tvId}/similar?` +
      `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const providers = async (tvId) => {
  const { data } = await http.get(
    `/tv/${tvId}/watch/providers?` +
      `api_key=${API_KEY}`
  );

  return data.results;
};
export const credits = async (tvId) => {
  const { data } = await http.get(
    `/tv/${tvId}/credits?` + `api_key=${API_KEY}`
  );

  return data;
};
export const episodes = async (tvId, seasonNumber) => {
  const { data } = await http.get(
    `/tv/${tvId}/season/${seasonNumber}?` + `api_key=${API_KEY}`
  );

  return data.episodes;
};