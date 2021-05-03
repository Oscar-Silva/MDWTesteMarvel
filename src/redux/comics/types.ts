import { Comic } from "../../models/comics";

interface FetchStatus {
  loading: boolean;
  error: boolean;
}

export default interface ComicsState {
  list: Comic[];
  fetchStatus: FetchStatus;
}
