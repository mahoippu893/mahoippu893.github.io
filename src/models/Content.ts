import type { Tag } from "./Tag";
import type { Streamer } from "./Streamer";
import type { Game } from "./Game";
import type { Talk } from "./Talk";
import type { Song } from "./Song";

export interface Content {
    title: string|null;
    url: string|null;
    openingStreamUrl: string|null;
    twitterUrl: string|null;
    platformId: number|null;
    contentsTypeId: number|null;
    startDate: string|null;
    thumbnailUrl: string|null;
    tags?: Tag[];
    streamers?: Streamer[];
    games?: Game[];
    talks?: Talk[];
    songs?: Song[];
}
