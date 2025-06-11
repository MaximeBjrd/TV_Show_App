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