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
  /**
   * @description GET https://test-api.k6.io/public/crocodiles/{id}
   * @param {Number} id The ID of the crocodile to fetch
  */
  getCrocodilesById(id) {
    return http.get(
      `${baseUrl}/public/crocodiles/${id}`,
    );
  },
}
