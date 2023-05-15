import { jsonplaceholderApi } from '../../services/jsonplaceholder.js';
import { describe, expect } from '../../libs/k6chai.js';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 3,
      maxDuration: '30s',
      gracefulStop: '0s',
    },
  },
};

/**
 * The purpose of this test is to ensure stability of the system under test and script(s)
 */
export default function() {
  describe('GET - /albums', () => {
    const response = jsonplaceholderApi.getAlbums();
    expect(response.status, 'response status code').to.equal(200);
  });

  describe('GET - /comments', () => {
    const response = jsonplaceholderApi.getComments();
    expect(response.status, 'response status code').to.equal(200);
  });

  describe('GET - /photos', () => {
    const response = jsonplaceholderApi.getPhotos();
    expect(response.status, 'response status code').to.equal(200);
  });

  describe('GET - /posts', () => {
    const response = jsonplaceholderApi.getPosts();
    expect(response.status, 'response status code').to.equal(200);
  });

  describe('GET - /todos', () => {
    const response = jsonplaceholderApi.getTodos();
    expect(response.status, 'response status code').to.equal(200);
  });

  describe('GET - /users', () => {
    const response = jsonplaceholderApi.getUsers();
    expect(response.status, 'response status code').to.equal(200);
  });
}
