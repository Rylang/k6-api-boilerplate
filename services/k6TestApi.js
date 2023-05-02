import http from 'k6/http';

const baseUrl = 'https://test-api.k6.io';

export const k6TestApi = {
  /**
   * @description GET https://test-api.k6.io/public/crocodiles/
  */
  getCrocodiles() {
    return http.get(
      `${baseUrl}/public/crocodiles/`,
    );
  },
}
