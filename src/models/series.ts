export default interface SeriesDataWrapper {
  code: number; //The HTTP status code of the returned result.,
  status: string; //A string description of the call status.,
  copyright: string; //The copyright notice for the returned result.,
  attributionText: string; //The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.,
  attributionHTML: string; //An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.,
  data: SeriesDataContainer; //The results returned by the call.,
  etag: string; //A digest value of the content returned by the call.
}
export interface SeriesDataContainer {
  offset: number; //The requested offset: number of skipped results) of the call.,
  limit: number; //The requested result limit.,
  total: number; //The total number of resources available given the current filter set.,
  count: number; //The total number of results returned by this call.,
  results: Series[]; //The list of series returned by the call
}
export interface Series {
  id: number; //The unique ID of the series resource.,
  title: string; //The canonical title of the series.,
  description: string; //A description of the series.,
  resourceURI: string; //The canonical URL identifier for this resource.,
  urls: Url[]; //A set of public web site URLs for the resource.,
  startYear: number; //The first year of publication for the series.,
  endYear: number; //The last year of publication for the series: conventionally, 2099 for ongoing series) .,
  rating: string; //The age-appropriateness rating for the series.,
  modified: Date; //The date the resource was most recently modified.,
  thumbnail: Image; //The representative image for this series.,
  comics: ComicList; //A resource list containing comics in this series.,
  stories: StoryList; //A resource list containing stories which occur in comics in this series.,
  events: EventList; //A resource list containing events which take place in comics in this series.,
  characters: CharacterList; //A resource list containing characters which appear in comics in this series.,
  creators: CreatorList; //A resource list of creators whose work appears in comics in this series.,
  next: SeriesSummary; //A summary representation of the series which follows this series.,
  previous: SeriesSummary; //A summary representation of the series which preceded this series.
}
export interface Url {
  type: string; //A text identifier for the URL.,
  url: string; //A full URL: including scheme, domain, and path).
}
export interface Image {
  path: string; //The directory path of to the image.,
  extension: string; //The file extension for the image.
}
export interface ComicList {
  available: number; //The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
  returned: number; //The number of issues returned in this collection: up to 20).,
  collectionURI: string; //The path to the full list of issues in this collection.,
  items: ComicSummary[]; //The list of returned issues in this collection.
}
export interface ComicSummary {
  resourceURI: string; //The path to the individual comic resource.,
  name: string; //The canonical name of the comic.
}
export interface StoryList {
  available: number; //The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
  returned: number; //The number of stories returned in this collection: up to 20).,
  collectionURI: string; //The path to the full list of stories in this collection.,
  items: StorySummary[]; //The list of returned stories in this collection.
}
export interface StorySummary {
  resourceURI: string; //The path to the individual story resource.,
  name: string; //The canonical name of the story.,
  type: string; //The type of the story: interior or cover).
}
export interface EventList {
  available: number; //The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
  returned: number; //The number of events returned in this collection: up to 20).,
  collectionURI: string; //The path to the full list of events in this collection.,
  items: EventSummary[]; //The list of returned events in this collection.
}
export interface EventSummary {
  resourceURI: string; //The path to the individual event resource.,
  name: string; //The name of the event.
}
export interface CharacterList {
  available: number; //The number of total available characters in this list. Will always be greater than or equal to the "returned" value.,
  returned: number; //The number of characters returned in this collection: up to 20).,
  collectionURI: string; //The path to the full list of characters in this collection.,
  items: CharacterSummary[]; //The list of returned characters in this collection.
}
export interface CharacterSummary {
  resourceURI: string; //The path to the individual character resource.,
  name: string; //The full name of the character.,
  role: string; //The role of the creator in the parent entity.
}
export interface CreatorList {
  available: number; //The number of total available creators in this list. Will always be greater than or equal to the "returned" value.,
  returned: number; //The number of creators returned in this collection: up to 20).,
  collectionURI: string; //The path to the full list of creators in this collection.,
  items: CreatorSummary[]; //The list of returned creators in this collection.
}
export interface CreatorSummary {
  resourceURI: string; //The path to the individual creator resource.,
  name: string; //The full name of the creator.,
  role: string; //The role of the creator in the parent entity.
}
export interface SeriesSummary {
  resourceURI: string; //The path to the individual series resource.,
  name: string; //The canonical name of the series.
}
