import { ENV_KEYS } from "@/config/Env";
import useGetQuery from "../helper/useGetQuery";

const API = {
  GET: 'services/rest',
};

const KEY = 'imagesDetails';

const defaultParams = {
  method: 'flickr.photos.getInfo',
  api_key: ENV_KEYS.FLICKR_KEY,
  format: 'json',
  nojsoncallback: 1,

};

export const useGetImageDetails = (
  params: {photo_id:number} ,
  options?: any,
) => useGetQuery(KEY, API.GET, { ...defaultParams, ...params }, options);