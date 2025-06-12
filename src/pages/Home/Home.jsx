import { useState, useEffect } from "react";
import { getPopularShow, getRecoShows } from "../../api/show-api";
import { CurrentShowPreview } from "../../components/CurrentShowPreview/CurrentShowPreview";
import style from "./Home.module.css"
import { RecoList } from "../../components/RecoList/RecoList";

export function HomePage() {
    const [currentShow, setCurrentShow] = useState(null);
    const [recoShows, setRecoShows] = useState([]);

    useEffect(() => {
        loadPopularShow();
    }, []);

    async function loadPopularShow() {
        const data = await getPopularShow();
        setCurrentShow(data.results[0]);
    }

    useEffect(() => {
        if(currentShow && currentShow.id) {
            loadRecoShows(currentShow.id);
        }
    }, [currentShow]);

    async function loadRecoShows(showId) {
        const data = await getRecoShows(showId);
        setRecoShows(data.results.slice(0, 10));
    }

    return <div className={style.appContainer}>
        {currentShow && (<>
            <CurrentShowPreview currentShow={currentShow} />
            <RecoList currentShow={currentShow} recoShows={recoShows} />
        </>)}
    </div>
}