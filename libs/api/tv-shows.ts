import axios, { AxiosResponse } from "axios";
import { buildURL } from "@/helpers/buildUrl";
import {
  Tv,
  TvCreditsResponse,
  TvEpisodeDetailsResponse,
  TvListResponse,
  TvProvidersResponse,
  TvResponse,
  TvVideo,
  TvVideosResponse,
  TvProviderResults,
} from "../interfaces/TV";

// General Features
export const top_rated = async (): Promise<Tv[]> => {
  try {
    const url = buildURL("/tv/top_rated");
    const response: AxiosResponse<TvListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const on_air = async (): Promise<Tv[]> => {
  try {
    const url = buildURL("/tv/on_the_air");
    const response: AxiosResponse<TvListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const airing_today = async (): Promise<Tv[]> => {
  try {
    const url = buildURL("/tv/airing_today");
    const response: AxiosResponse<TvListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const popular = async (): Promise<Tv[]> => {
  try {
    const url = buildURL("/tv/popular");
    const response: AxiosResponse<TvListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

// TV Features
export const details = async (tvId: number): Promise<TvResponse> => {
  try {
    const url = buildURL(`/tv/${tvId}`, { page: 1 });
    const response: AxiosResponse<TvResponse> = await axios.get(url.toString());
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const videos = async (tvId: number): Promise<TvVideosResponse[]> => {
  try {
    const url = buildURL(`/tv/${tvId}/videos`);
    const response: AxiosResponse<TvVideosResponse[]> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const recommended = async (tvId: number): Promise<Tv[]> => {
  try {
    const url = buildURL(`/tv/${tvId}/recommendations`);
    const response: AxiosResponse<TvListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const similar = async (tvId: number): Promise<Tv[]> => {
  try {
    const url = buildURL(`/tv/${tvId}/similar`);
    const response: AxiosResponse<TvListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const credits = async (tvId: number): Promise<TvCreditsResponse> => {
  try {
    const url = buildURL(`/tv/${tvId}/credits`);
    const response: AxiosResponse<TvCreditsResponse> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const episodes = async (
  tvId: number,
  seasonNumber: number
): Promise<TvEpisodeDetailsResponse[]> => {
  try {
    const url = buildURL(`/tv/${tvId}/season/${seasonNumber}`);
    const response: AxiosResponse<TvEpisodeDetailsResponse[]> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const providers = async (tvId: number): Promise<TvProviderResults> => {
  try {
    const url = buildURL(`/tv/${tvId}/watch/providers`);
    const response: AxiosResponse<TvProvidersResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};
