import { Character } from "../../models/characters";

interface FetchStatus {
  loading: boolean;
  error: boolean;
}

export default interface CharacterState {
  list: Character[];
  fetchStatus: FetchStatus;
}
