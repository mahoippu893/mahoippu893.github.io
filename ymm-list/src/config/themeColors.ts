/**
 * グローバルテーマカラー設定
 * 全体の背景色・ボタン色・テキスト色等を一箇所で管理。
 * 色を変えたいときはこのファイルだけ変更すればOK。
 *
 * ※ プラットフォーム固有色（YouTube赤・ニコニコ白など）は platformColors.ts で管理。
 */

export const theme = {
    // ページ背景
    pageBg: "bg-sky-50",
    pageHover: "hover:bg-sky-100",

    // テキスト
    text: "text-sky-900",
    textSub: "text-sky-600",
    textLabel: "text-sky-700",
    textMuted: "text-sky-500",
    textAccent: "text-sky-800",

    // ボタン
    button: "bg-sky-200 hover:bg-sky-300",
    buttonActive: "active:bg-sky-200/50",
    buttonPrimary: "bg-sky-500 text-white hover:bg-sky-600 disabled:bg-sky-300 disabled:cursor-not-allowed",

    // 入力欄
    input: "bg-white border-sky-300 text-sky-900 focus:ring-sky-400 focus:border-transparent placeholder-sky-400",
    inputSmall: "bg-white border-sky-300 text-sky-900 focus:ring-sky-400 focus:border-transparent placeholder-sky-400 text-sm",

    // ボーダー
    border: "border-sky-200",
    borderInput: "border-sky-300",
    borderHover: "hover:border-sky-500",
    divider: "bg-sky-300",

    // カード
    cardBg: "bg-white",

    // ピル（タグ表示）
    pill: "bg-sky-200 text-sky-900",
    pillHover: "hover:bg-sky-300",
    pillCheckbox: "bg-white border border-sky-200 hover:bg-sky-100",

    // チェックボックス
    checkbox: "bg-white border-sky-300 text-sky-600 focus:ring-sky-500 focus:ring-offset-0 accent-sky-600",

    // アコーディオン
    accordionHeader: "bg-sky-100",
    accordionContent: "bg-sky-50",
    accordionArrow: "text-sky-400",

    // モバイルフッター
    footerBg: "bg-sky-100/95",

    // カレンダーセル
    cellBg: "bg-white/70 backdrop-blur border border-sky-200",
    cellEmptyBg: "bg-white/40 backdrop-blur border border-sky-200",

    // ドロップダウン
    dropdown: "bg-white border-sky-200",
    dropdownHover: "hover:bg-sky-100",

    // 閉じるボタン・リンク
    closeButton: "text-sky-700 hover:text-sky-900",
    link: "text-sky-600 hover:text-sky-900",

    // ページネーション
    pagination: "bg-sky-200 text-sky-900 hover:bg-sky-300",
};
