import { CONSTANTS } from "../constants/constants";

export async function getPopularShow() {
  try {
    const res = await fetch(CONSTANTS.POPULAR_SHOW);
    const data = await res.json();
    return data;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRecoShows(showId) {
  try {
    const res = await fetch(CONSTANTS.RECO(showId));
    const data = await res.json();
    return data;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}