export const INSTAGRAM_URL = "https://www.instagram.com/boat_seabass_2face/";
export const LINE_URL = "https://line.me/R/ti/p/@2face";
export const YOUTUBE_URL = "https://www.youtube.com/@lifeismaxbet";

export const MARINA_NAME = "四国マリーナ";
export const MARINA_ADDRESS = "徳島県徳島市川内町鈴江北127-5";

const mapQuery = encodeURIComponent(`${MARINA_NAME} ${MARINA_ADDRESS}`);

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
