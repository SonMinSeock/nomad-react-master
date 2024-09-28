const BASE_URL = "https://api.coinpaprika.com";

export function fetchCoins() {
  return fetch(`${BASE_URL}/v1/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/v1/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/v1/tickers/${coinId}`).then((response) => response.json());
}
