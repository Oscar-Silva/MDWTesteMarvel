import api, { getAuthURL } from "..";
import SeriesDataWrapper, { Series } from "../../../models/series";

export default async function requestSeries(
  limit: number = 10
): Promise<Series[] | undefined> {
  const result: SeriesDataWrapper = (
    await api.get(getAuthURL("/series"), {
      params: { limit, orderBy: "-modified" },
    })
  ).data;

  return result.data?.results;
}
