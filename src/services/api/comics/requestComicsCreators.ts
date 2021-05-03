import api, { getAuthURL } from "..";
import CharacterDataWrapper, { Character } from "../../../models/characters";

export default async function requestComicsCreators(
  seriesID: number,
  limit: number = 10
): Promise<Character[] | undefined> {
  const result: CharacterDataWrapper = (
    await api.get(getAuthURL(`/comics/${seriesID}/characters`), {
      params: { limit, orderBy: "-modified" },
    })
  ).data;

  return result.data?.results;
}
