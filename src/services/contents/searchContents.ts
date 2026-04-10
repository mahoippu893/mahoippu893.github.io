import type { Content } from "../../models/Content";
import { loadContents } from "../../repositories/loadContents";

export type SearchResponse = {
    items: Content[];
    totalCount: number;
    page: number;
    limit: number;
    totalPages: number;
};

export async function searchContents(
    page: number = 1,
    limit: number = 50,
    titles?: string[],
    platformIds?: number[],
    contentsTypeIds?: number[],
    from?: string,
    to?: string
): Promise<SearchResponse> {
    
    const contents = await loadContents();
    let filtered = contents;

    // タイトル検索
    if (titles && titles.length > 0) {
        filtered = filtered.filter(c =>
            titles.some(t => c.title.includes(t))
        );
    }

    // プラットフォーム
    if (platformIds && platformIds.length > 0) {
        filtered = filtered.filter(c =>
            platformIds.includes(c.platformId ?? -1)
        );
    }

    // コンテンツタイプ
    if (contentsTypeIds && contentsTypeIds.length > 0) {
        filtered = filtered.filter(c =>
            contentsTypeIds.includes(c.contentsTypeId ?? -1)
        );
    }

    // 日付範囲
    if (from) {
        filtered = filtered.filter(c => c.startDate >= from);
    }
    if (to) {
        filtered = filtered.filter(c => c.startDate <= to);
    }

    // ページング
    const start = (page) * limit;
    const items = filtered.slice(start, start + limit);

    return {
        items: items,
        totalCount: filtered.length,
        page: page,
        limit: limit,
        totalPages: Math.ceil(filtered.length / limit),
    };
}
