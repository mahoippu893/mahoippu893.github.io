import { theme } from "../../config/themeColors";

interface StreamSliderRightButtonProps {
    onClick: () => void;
}

export default function StreamSliderRightButton(
    { onClick }: StreamSliderRightButtonProps
) {

    return (
        <div className="flex items-center justify-center">
            <button onClick={onClick} className={`w-12 h-12 rounded-full overflow-hidden ${theme.pageHover} hover:${theme.button}`}>
                ＞
            </button>
        </div>
    )
}
