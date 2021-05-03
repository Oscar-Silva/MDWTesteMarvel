import api, { getAuthURL } from "..";
import ComicDataWrapper, { Comic } from "../../../models/comics";

export default async function requestSeries(
  limit: number = 10
): Promise<Comic[] | undefined> {
  const result: ComicDataWrapper = (
    await api.get(getAuthURL("/comics"), {
      params: { limit, orderBy: "modified" },
    })
  ).data;

  return result.data?.results;
}
