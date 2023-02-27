import http from "../../helpers/http";

// General Features
export const popular = async (language = "en-US", page = 1) => {
  const pathname = "/person/popular";
  const { data } = await http({ pathname }).catch();

  return data.results;
};
export const details = async (personId: string, language = "en-US") => {
  const pathname = `/person/${personId}?`;
  const { data } = await http({ pathname }).catch();

  return data;
};
