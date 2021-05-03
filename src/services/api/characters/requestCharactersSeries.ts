import api, { getAuthURL } from "..";
import SeriesDataWrapper, { Series } from "../../../models/series";

export default async function requestCharactersSeries(
  characterID: number,
  limit: number = 10
): Promise<Series[] | undefined> {
  const result: SeriesDataWrapper = (
    await api.get(getAuthURL(`/characters/${characterID}/series`), {
      params: { limit, orderBy: "-modified" },
    })
  ).data;

  return result.data?.results;
}
