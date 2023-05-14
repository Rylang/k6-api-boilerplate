import { smokeTest } from '../../options/smokeTest.js';
import { jsonplaceholderApi } from '../../services/jsonplaceholder.js';
import { describe, expect } from '../../libs/k6chai.js';

export const options = smokeTest;

export default function() {
  describe('GET - /albums', () => {
    const response = jsonplaceholderApi.getAlbums();
    expect(response.status, 'response status').to.equal(200);
  });

  describe('GET - /comments', () => {
    const response = jsonplaceholderApi.getComments();
    expect(response.status, 'response status').to.equal(200);
  });

  describe('GET - /photos', () => {
    const response = jsonplaceholderApi.getPhotos();
    expect(response.status, 'response status').to.equal(200);
  });

  describe('GET - /posts', () => {
    const response = jsonplaceholderApi.getPosts();
    expect(response.status, 'response status').to.equal(200);
  });

  describe('GET - /todos', () => {
    const response = jsonplaceholderApi.getTodos();
    expect(response.status, 'response status').to.equal(200);
  });

  describe('GET - /users', () => {
    const response = jsonplaceholderApi.getUsers();
    expect(response.status, 'response status').to.equal(200);
  });
}
