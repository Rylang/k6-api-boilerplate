import http from 'k6/http';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const jsonplaceholderApi = {
  /**
   * @description GET https://jsonplaceholder.typicode.com/posts
  */
  getPosts() {
    return http.get(
      `${baseUrl}/posts`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/comments
  */
  getComments() {
    return http.get(
      `${baseUrl}/comments`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/albmus
  */
  getAlbums() {
    return http.get(
      `${baseUrl}/albums`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/photos
  */
  getPhotos() {
    return http.get(
      `${baseUrl}/photos`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/todos
  */
  getTodos() {
    return http.get(
      `${baseUrl}/todos`,
    );
  },
  /**
   * @description GET https://jsonplaceholder.typicode.com/users
  */
  getUsers() {
    return http.get(
      `${baseUrl}/users`,
    );
  },
}
