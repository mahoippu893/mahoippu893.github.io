import { theme } from "../../config/themeColors";
import { useState } from "react";

interface SideMenuLinkButtonProps {
    label: string;
    icon?: React.ReactNode;
}

export default function SideMenuLinkButton({ label, icon }: SideMenuLinkButtonProps) {

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div        
            className={`py-4 px-8 text-lg ${theme.pageHover} cursor-pointer flex items-center gap-3 font-bold relative`}
            onMouseEnter={() => setShowTooltip(true)}
            onFocus={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onBlur={() => setShowTooltip(false)}
            tabIndex={0}
        >
            {icon ? (
                <span className="w-7 h-8 flex-shrink-0">{icon}</span>
            ) : null}
            {showTooltip && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap bg-gray-700 text-white text-sm rounded px-2 py-1 z-10 shadow-lg pointer-events-none">
                    {label}
                </div>
            )}
        </div>
    );
}
