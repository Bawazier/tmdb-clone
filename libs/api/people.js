import http from "../../helpers/http";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// General Features
export const popular = async (language = "en-US", page = 1) => {
  const { data } = await http.get(
    "/person/popular?" + `api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return data.results;
};
export const details = async (personId, language = "en-US") => {
  const { data } = await http.get(
    `/person/${personId}?` + `api_key=${API_KEY}&language=${language}`
  );

  return data;
};
