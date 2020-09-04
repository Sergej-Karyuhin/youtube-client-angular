import { ISearchItem } from "./search-item.model";

export interface IResponse {
  etag: string;
  kind: string;
  items: IResponse[];
  pageInfo: IPageInfo;
}

interface IPageInfo {
  resultsPerPage: number;
  totalResults: number;
}
