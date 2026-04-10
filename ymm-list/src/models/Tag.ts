export interface Tag {
    id: number;
    name: string|null;
    createDate: string|null;
    updateDate: string|null;
    /** コンテンツ紐付け時のロック状態 (0=未ロック, 1=ロック) */
    lockFlg?: number;
}
