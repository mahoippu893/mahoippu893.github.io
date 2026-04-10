import { useEffect, useRef } from "react";

type Props = {
    tweetUrl: string;
};

export default function TwitterWidget({ tweetUrl }: Props) {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const scriptId = "twitter-wjs";

        const renderEmbed = () => {
            if (window.twttr?.widgets && containerRef.current) {
                window.twttr.widgets.load(containerRef.current);
            }
        };

        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            renderEmbed();
            return;
        }

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        script.onload = renderEmbed;

        document.body.appendChild(script);
    }, [tweetUrl]);

    return (
        <div ref={containerRef}>
            <blockquote className="twitter-tweet">
                <a href={tweetUrl}></a>
            </blockquote>
        </div>
    );
}

declare global {
    interface Window {
        twttr?: {
            widgets?: {
                load: (element?: HTMLElement | null) => void;
            };
        };
    }
}
