
export interface YoutubeThumbnailProps {
    url: string;
    title: string;
}

export default function YoutubeThumbnail({ url, title }: YoutubeThumbnailProps) {

    return (
        <img
            src={getThumbnailUrl(getYoutubeId(url))}
            alt={title}
            loading="lazy" />
    );
}

function getYoutubeId(url: string|null): string|null {

    if (url == null) {
        return null;
    }

    try {

        const u = new URL(url);
        if (u.hostname === "youtu.be") {
            return u.pathname.split("/").filter(Boolean)[0];
        }

        const v = u.searchParams.get("v");
        if (v) {
            return v;
        }

        const parts = u.pathname.split("/").filter(Boolean);
        const idx = parts.findIndex((p) => ["embed", "shorts", "live"].includes(p));
        if (idx >= 0 && parts[idx + 1]) {
            return parts[idx + 1];
        }

        return null;
    } catch {
        return null;
    }
}

function getThumbnailUrl(youtubeId: string|null): string {
    return `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
}