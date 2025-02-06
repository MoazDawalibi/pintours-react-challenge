import { ENV_KEYS } from "@/config/Env";
import useGetQueryWithPagination from "../helper/useGetQueryWithPagination";

const API = {
  GET: 'services/rest',
};

const KEY = 'images';

const defaultParams = {
  method: 'flickr.photos.search',
  api_key: ENV_KEYS.FLICKR_KEY,
  format: 'json',
  nojsoncallback: 1,
  extras: 'url_w',
  page: 1,
  per_page: 20,
};

export const useGetAllImages = (
  params: Record<string, any> = {},
  options?: any,
) => useGetQueryWithPagination(KEY, API.GET, { ...defaultParams, ...params }, options);