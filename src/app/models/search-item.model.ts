export interface ISearchItem {
  etag: string;
  id: string;
  kind: string;
  snippet: ISnippet;
  statistics: IStatistics;
}



interface ISnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  publishedAt: string;
  title: string;
  localized: ILocalized;
  tags: string[];
  thumbnails: {
    default: IThumbnailsItem;
    high: IThumbnailsItem;
    maxres: IThumbnailsItem;
    medium: IThumbnailsItem;
    standard: IThumbnailsItem;
  }
}

interface IStatistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}



interface IThumbnailsItem {
  height: number;
  url: string;
  width: number;
}

interface ILocalized {
  description: string;
  title: string;
}
