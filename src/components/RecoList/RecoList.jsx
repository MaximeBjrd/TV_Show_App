import style from "./RecoList.module.css"
import { RecoListItem } from "./RecoListItem/RecoListItem";

export function RecoList({ currentShow, recoShows }) {
    if(!currentShow) return null;

    return <>
        <div>
            <p>You may also like:</p>

            <button>Filter shows...</button>

            <div>
                {recoShows.map((show) => (
                    <RecoListItem key={show.id} show={show}/>
                ))}
            </div>
        </div>
    </>
}