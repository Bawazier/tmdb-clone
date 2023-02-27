import axios, { AxiosResponse } from "axios";
import { buildURL } from "@/helpers/buildUrl";
import {
  Movie,
  MovieCast,
  MovieCreditsResponse,
  MovieCrew,
  MovieListResponse,
  MovieResponse,
  MovieVideo,
  MovieVideosResponse,
  MovieWatchProvider,
  MovieWatchProvidersResponse,
  MovieWatchProviderResults,
} from "../interfaces/Movie";

export const top_rated = async (): Promise<Movie[]> => {
  try {
    const url = buildURL("/movie/top_rated");
    const response: AxiosResponse<MovieListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const upcoming = async (): Promise<Movie[]> => {
  try {
    const url = buildURL("/movie/upcoming");
    const response: AxiosResponse<MovieListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const now_playing = async (): Promise<Movie[]> => {
  try {
    const url = buildURL("/movie/now_playing");
    const response: AxiosResponse<MovieListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const popular = async (): Promise<Movie[]> => {
  try {
    const url = buildURL("/movie/popular");
    const response: AxiosResponse<MovieListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const details = async (movieId: number): Promise<MovieResponse> => {
  try {
    const url = buildURL(`/movie/${movieId}`, { page: 1 });
    const response: AxiosResponse<MovieResponse> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const videos = async (
  movieId: number
): Promise<MovieVideosResponse[]> => {
  try {
    const url = buildURL(`/movie/${movieId}/videos`);
    const response: AxiosResponse<MovieVideosResponse[]> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const recommended = async (movieId: number): Promise<Movie[]> => {
  try {
    const url = buildURL(`/movie/${movieId}/recommendations`);
    const response: AxiosResponse<MovieListResponse> = await axios.get(
      url.toString()
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const similar = async (
  movieId: number
): Promise<MovieListResponse[]> => {
  try {
    const url = buildURL(`/movie/${movieId}/similar`);
    const response: AxiosResponse<MovieListResponse[]> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const providers = async (
  movieId: number
): Promise<MovieWatchProviderResults> => {
  try {
    const url = buildURL(`/movie/${movieId}/watch/providers`);
    const response: AxiosResponse<MovieWatchProvidersResponse> =
      await axios.get(url.toString());
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const credits = async (
  movieId: number
): Promise<MovieCreditsResponse> => {
  try {
    const url = buildURL(`/movie/${movieId}/credits`);
    const response: AxiosResponse<MovieCreditsResponse> = await axios.get(
      url.toString()
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
