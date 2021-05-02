import axios from "axios";
import Constants from "expo-constants";
import { MARVEL_PUBKEY, MARVEL_HASH, MARVEL_TS } from "@env";

export const fecthDefaultParams = {
  ts: MARVEL_TS,
  hash: MARVEL_HASH,
  apiKey: MARVEL_PUBKEY,
};

export const getAuthURL = (url: string) => {
  const { ts, hash, apiKey } = fecthDefaultParams;
  return `${url}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
};

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});

export default api;
