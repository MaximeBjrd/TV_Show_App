import style from "./RecoListItem.module.css"
import { CONSTANTS } from "../../../constants/constants"
import { Link } from "react-router"
import { ROUTES } from "../../../config/routes"

export function RecoListItem({show}) {
    return <>
        <div>
            <img 
                src={`${CONSTANTS.BASE_URL_IMG_SMALL}${show.backdrop_path}`} 
                alt={show.name}
                className={style.card}
            />

            <p>{show.name}</p>
            
            <Link to={ROUTES.DETAIL.replace(":id", show.id)}> <button>Infos</button> </Link>
        </div>
    </>
}