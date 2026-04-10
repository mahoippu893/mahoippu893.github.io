import type { Content } from "../../models/Content";
import TwitterWidget from "../twitterWidget/twitterWidget";
import YoutubeThumbnail from "../youtubeThumbnail/youtubeThumbnail";
import { PLATFORM_YOUTUBE_STREAM, PLATFORM_YOUTUBE_MOVIE, PLATFORM_YOUTUBE_SHORT, PLATFORM_NICONICO_PETIT_LOVE_STREAM, PLATFORM_NICONICO_BIG_LOVE_STREAM, PLATFORM_NICONICO_BIG_LOVE_MOVIE } from "../../config/platformIds";

export interface StreamSliderItemProps {
    content: Content|null;
    onClick: (content: Content|null) => void;
}

export default function StreamSliderItem({ 
    content, 
    onClick 
}: StreamSliderItemProps) {

    if (content == null) {
        return null;
    }

    switch (content.platformId) {
        case PLATFORM_YOUTUBE_STREAM:
        case PLATFORM_YOUTUBE_MOVIE:
        case PLATFORM_YOUTUBE_SHORT:

            if (content.url == null) {
                return null;
            }

            return (<button className="max-w-sm" onClick={() => onClick(content)}><YoutubeThumbnail url={content.url} title={content.title ?? ""} /></button>);
        case PLATFORM_NICONICO_PETIT_LOVE_STREAM:
        case PLATFORM_NICONICO_BIG_LOVE_STREAM:
        case PLATFORM_NICONICO_BIG_LOVE_MOVIE:

            if (content.openingStreamUrl != null && content.openingStreamUrl != "") {
                return  (<button className="max-w-sm" onClick={() => onClick(content)}><YoutubeThumbnail url={content.openingStreamUrl} title={content.title ?? ""} /></button>);
            }

            if (content.twitterUrl != null && content.twitterUrl != "") {
                return  (<button className="max-w-sm" onClick={() => onClick(content)}><TwitterWidget tweetUrl={content.twitterUrl} /></button>);
            }

            return null;
    }

    return null;
}
