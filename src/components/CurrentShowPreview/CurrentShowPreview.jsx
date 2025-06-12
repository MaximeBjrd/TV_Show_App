import { ROUTES } from "../../config/routes"
import { CONSTANTS } from "../../constants/constants"
import { Link } from "react-router"

export function CurrentShowPreview({currentShow}) {
    const backgroundStyle = {
        backgroundImage: `url(${CONSTANTS.BASE_URL_IMG_BIG}/${currentShow.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
    }

    return <div style={backgroundStyle}>
        <h2>{currentShow.original_name}</h2>
        <p>{(currentShow.vote_average/2).toFixed(1)}/5</p>
        <p>{currentShow.overview}</p>

        <Link to={ROUTES.DETAIL.replace(":id", currentShow.id)}> <button>More info</button> </Link>
    </div>
}