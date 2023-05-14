import http from 'k6/http';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const jsonplaceholderApi = {
  /**
   * @description GET https://jsonplaceholder.typicode.com/posts
   * @return {Object} The k6 HTTP response object
  */
  getPosts() {
    return http.get(
      `${baseUrl}/posts`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/comments
   * @return {Object} The k6 HTTP response object
  */
  getComments() {
    return http.get(
      `${baseUrl}/comments`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/albmus
   * @return {Object} The k6 HTTP response object
  */
  getAlbums() {
    return http.get(
      `${baseUrl}/albums`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/photos
   * @return {Object} The k6 HTTP response object
  */
  getPhotos() {
    return http.get(
      `${baseUrl}/photos`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/todos
   * @return {Object} The k6 HTTP response object
  */
  getTodos() {
    return http.get(
      `${baseUrl}/todos`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/users
   * @return {Object} The k6 HTTP response object
  */
  getUsers() {
    return http.get(
      `${baseUrl}/users`,
    );
  },
}
