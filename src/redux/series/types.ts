import { Series } from "../../models/series";

interface FetchStatus {
  loading: boolean;
  error: boolean;
}

export default interface SeriesState {
  list: Series[];
  fetchStatus: FetchStatus;
}
