const API_KEY = 'key=73b0ab60b59b4f00bef9910f45e0f9fa';
const BASE_URL = 'https://api.rawg.io/api';

export const GET_GAMES_BY_DATE = (initial_date, final_date, numberofpage, sizepage) => {
  return {
    method: 'get',
    url:
      BASE_URL +
      '/games?' +
      `dates=${initial_date},${final_date}&page=${numberofpage}&page_size=${sizepage}&` +
      API_KEY,
  };
};


export const GET_ALL = () => {
  return {
    method: 'get',
    url: BASE_URL + `/games?` + API_KEY
  };
}

export const GET_PARENTS_PLATFORMS = () => {
  return {
    method: 'get',
    url: BASE_URL + '/platforms/lists/parents?' + API_KEY
  };
};

export const GET_GAMES_BY_PLATFORM = (platform_id, signal) => {
  return {
    method: 'get',
    url: BASE_URL + `/games?platforms=${platform_id}&` + API_KEY,
    signal
  }
}

export const GET_GAME_BY_ID = (id, signal) => {
  return {
    method: 'get',
    url: BASE_URL + `/games/${id}?` + API_KEY,
    signal
  }
}

/* Esta requisição consome todos os jogos possiveis, com um endpoint diferente, que há um filter */
/* useEffect(() => {
  async function requestApi() {
    await request(GET_GAMES_BY_DATE('2022-01-01', '2023-01-06', currentPage, quantityPerpage));
    await request(GET_ALL());
    if (cachedData) {
      // Se os dados estiverem em cache, atualiza o estado com os dados em cache
      setCachedData(JSON.parse(cachedData));
      return;
    }
    // Se os dados não estiverem em cache, faz a requisição
    const response = await request(GET_GAMES_BY_DATE('2022-01-01', '2023-01-06', currentPage, quantityPerpage));
    // Armazena os dados em cache
    localStorage.setItem(`games_${currentPage}_${quantityPerpage}`, JSON.stringify(response ? 'gettingdata' : 'datacaught'));
    // Atualiza o estado com os dados da resposta
    setCachedData(response);
  }
  requestApi();
}, [currentPage, quantityPerpage]); */