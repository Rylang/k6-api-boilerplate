export const k6 = {
  /**
   * @description GET https://test-api.k6.io/public/crocodiles/
  */
  getCrocodiles() {
    const response = http.get(
      'https://test-api.k6.io/public/crocodiles/',
    );
    checkForResponseCode(200, response);
  },
}
