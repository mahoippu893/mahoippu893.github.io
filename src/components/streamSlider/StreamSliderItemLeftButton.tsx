import { theme } from "../../config/themeColors";

interface StreamSliderItemLeftButtonProps {
    onClick: () => void;
}

export default function StreamSliderItemLeftButton (
    { onClick }: StreamSliderItemLeftButtonProps
) {

    return (
        <div className="flex items-center justify-center">
            <button onClick={onClick} className={`w-12 h-12 rounded-full overflow-hidden ${theme.pageHover} hover:${theme.button}`}>
            ＜
            </button>
        </div>
    )
}
