export const CONSTANTS = {
    LOGO: "./src/assets/logo.png",

    BASE_URL: "https://api.themoviedb.org/3",
    SHOW_ID: (id) => `${id}`,
    SHOW_QUERY: (query) => `${encodeURIComponent(query)}`,

    BASE_URL_IMG_BIG: "https://image.tmdb.org/t/p/original",
    BASE_URL_IMG_SMALL: "https://image.tmdb.org/t/p/w300"
}

CONSTANTS.SHOW_BY_TITLE = (query) => `${CONSTANTS.BASE_URL}/search/tv?api_key=${import.meta.env.VITE_API_KEY_PARAM}&query=${CONSTANTS.SHOW_QUERY(query)}`
CONSTANTS.SHOW_BY_ID = (id) => `${CONSTANTS.BASE_URL}/tv/${CONSTANTS.SHOW_ID(id)}?api_key=${import.meta.env.VITE_API_KEY_PARAM}&append_to_response=credits`
CONSTANTS.RECO = (id) => `${CONSTANTS.BASE_URL}/tv/${CONSTANTS.SHOW_ID(id)}/recommendations?api_key=${import.meta.env.VITE_API_KEY_PARAM}`
CONSTANTS.POPULAR_SHOW = `${CONSTANTS.BASE_URL}/tv/popular?api_key=${import.meta.env.VITE_API_KEY_PARAM}`