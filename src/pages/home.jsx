import { useState, useEffect } from "react";
import { getPopularShow } from "../api/show-api";

export function HomePage() {
    const [currentShow, setCurrentShow] = useState([]);

    useEffect(() => {
        loadPopularShow();
    }, []);

    async function loadPopularShow() {
        const data = await getPopularShow();
        setCurrentShow(data.results[0]);
    }

    return <>
        <h2>Home page</h2>
        <p>{currentShow.original_name}</p>
    </>
}