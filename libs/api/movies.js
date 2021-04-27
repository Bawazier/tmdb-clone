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

  return data.results;
};
export const upcoming = async (language = "en-US", page = 1, region = "US") => {
  const { data } = await http.get(
    "/movie/upcoming?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data.results;
};
export const now_playing = async (
  language = "en-US",
  page = 1,
  region = "US"
) => {
  const { data } = await http.get(
    "/movie/now_playing?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data.results;
};
export const popular = async (language = "en-US", page = 1, region = "US") => {
  const { data } = await http.get(
    "/movie/popular?" +
      `api_key=${API_KEY}&language=${language}&page=${page}&region=${region}`
  );

  return data.results;
};

// Movies Features
export const details = async (movieId, language = "en-US") => {
  const { data } = await http.get(
    `/movie/${movieId}?` + `api_key=${API_KEY}&language=${language}`
  );

  return data;
};
export const videos = async (movieId, language = "en-US") => {
  const { data } = await http.get(
    `/movie/${movieId}/videos?` + `api_key=${API_KEY}&language=${language}`
  );

  return data.results;
};
export const recommended = async (movieId, language = "en-US", page = 1) => {
  const { data } = await http.get(
    `/movie/${movieId}/recommendations?` +
      `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const similar = async (movieId, language = "en-US", page = 1) => {
  const { data } = await http.get(
    `/movie/${movieId}/similar?` +
      `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const providers = async (movieId) => {
  const { data } = await http.get(
    `/movie/${movieId}/watch/providers?` +
      `api_key=${API_KEY}`
  );

  return data.results;
};
export const credits = async (movieId) => {
  const { data } = await http.get(
    `/movie/${movieId}/credits?` + `api_key=${API_KEY}`
  );

  return data;
};