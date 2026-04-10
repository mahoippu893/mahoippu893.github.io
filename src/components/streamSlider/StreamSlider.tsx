import StreamSliderItem from "./StreamSliderItem";
import type { Content } from "../../models/Content";
import StreamSliderItemRightButton from "./StreamSliderItemRightButton";
import StreamSliderItemLeftButton from "./StreamSliderItemLeftButton";
import { useEffect, useState } from "react";
import { searchContents } from "../../services/contents/searchContents";

interface StreamSliderProps {
    label: string;
    contentsTypeId: number;
    leftButtonOnClick: () => void;
    rightButtonOnClick: () => void;
}

export default function StreamSlider({ 
    label,
    contentsTypeId
}: StreamSliderProps
) {

    const [contents, setContents] = useState<Content[]>([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(4);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const update = () => {

            let qty = Math.floor((window.innerWidth - 800) / 170);
            if (qty > 6) {
                qty = 6;
            }
            if (qty < 3) {
                qty = 3;
            }
            setLimit(qty);
        };

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        const run = async () => {
            const result = await searchContents(page, limit, [], [], [contentsTypeId]);
            setContents(result.items);
            setTotalPages(result.totalPages);
        };
        run();
    }, [page, limit]);

    return (
        <div className="px-8 md:py-4 py-2">

            <div className="text-xl border-b border-gray-400">{label}</div>

            <div className="flex gap-1 pt-2">

                {page > 0 ? (
                    <StreamSliderItemLeftButton onClick={() => setPage(page - 1)} />
                ) : null}

                {contents.map((content) => (
                    <StreamSliderItem content={content} onClick={() => {}} />
                ))}

                {page < totalPages - 1 ? (
                    <StreamSliderItemRightButton onClick={() => setPage(page + 1)} />
                ) : null}

            </div>
        </div>
    );
}
