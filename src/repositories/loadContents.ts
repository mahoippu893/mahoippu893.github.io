import type { Content } from "../models/Content";

let cache: Content[] | null = null;

export async function loadContents(): Promise<Content[]> {

    if (cache) return cache;
    
    // TODO 複数ファイル対応
    const resultJson = await fetch("/data/contents/202603.json");
    const result = await resultJson.json();
    
    cache = result.contents;
    return result.contents;
}
