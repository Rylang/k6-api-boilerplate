import { jsonplaceholderApi } from '../../services/jsonplaceholder.js';
import { describe, expect } from '../../libs/k6chai.js';

// TODO: set up scenarios for each endpoint to set different throughputs
export const options = {
  discardResponseBodies: true,
  scenarios: {
    albums: {
      executor: 'ramping-arrival-rate',
      startRate: 1,
      timeUnit: '1m',
      preAllocatedVUs: 4,
      stages: [
        { target: 5, duration: '20s' },
        { target: 10, duration: '20s' },
        { target: 25, duration: '20s' },
        { target: 50, duration: '3m' },
      ],
    },
  },
};

/**
 * This test executes a "normal" sized throughput utilizing real world request patterns
 */
export default function() {
  // 1) Fetch Users
  describe('GET - /albums', () => {
    const response = jsonplaceholderApi.getAlbums();
    expect(response.status, 'response status code').to.equal(200);
    expect(response.timings.duration, 'request duration').to.be.lessThan(300);
  });

  // 2) Fetch Users posts
  describe('GET - /posts', () => {
    const response = jsonplaceholderApi.getPosts();
    expect(response.status, 'response status code').to.equal(200);
    expect(response.timings.duration, 'request duration').to.be.lessThan(300);
  });

  // 3) Fetch Users comments
  describe('GET - /comments', () => {
    const response = jsonplaceholderApi.getComments();
    expect(response.status, 'response status code').to.equal(200);
    expect(response.timings.duration, 'request duration').to.be.lessThan(300);
  });

  // 4) Fetch Users Todos
  describe('GET - /todos', () => {
    const response = jsonplaceholderApi.getTodos();
    expect(response.status, 'response status code').to.equal(200);
    expect(response.timings.duration, 'request duration').to.be.lessThan(300);
  });
}
