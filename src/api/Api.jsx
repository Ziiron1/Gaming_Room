const API_KEY = 'key=7a53668fec654bc4ad74b08c37725f8a';
const BASE_URL = 'https://api.rawg.io/api';

export const GET_GAMES_BY_DATE = (initial_date, final_date) => {
  return {
    method: 'get',
    url:
      BASE_URL +
      '/games?' +
      `dates=${initial_date},${final_date}&page_size=12&` +
      API_KEY,
  };
};

export const GET_PARENTS_PLATFORMS = () => {
  return {
    method: 'get',
    url: BASE_URL + '/platforms/lists/parents?' + API_KEY
  };
};

export const GET_GAMES_BY_PLATFORM = (platform_id, signal) => {
  return {
    method: 'get',
    url: BASE_URL + `/games?parent_platforms=${platform_id}&` + API_KEY,
    signal
  }
}

export const GET_GAME_BY_ID = (game_id, signal) => {
  return {
    method: 'get',
    url: BASE_URL + `/games/${game_id}?` + API_KEY,
    signal
  }
}
