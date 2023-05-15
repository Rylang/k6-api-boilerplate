import { jsonplaceholderApi } from '../../services/jsonplaceholder.js';
import { describe, expect } from '../../libs/k6chai.js';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    albums: {
      executor: 'ramping-arrival-rate',
      startRate: 2,
      timeUnit: '1m',
      preAllocatedVUs: 4,
      stages: [
        { target: 10, duration: '20s' },
        { target: 20, duration: '20s' },
        { target: 50, duration: '20s' },
        { target: 100, duration: '3m' },
      ],
    },
  },
};

/**
 * This test executes a Stress test at 100% increased throughput utilizing real world request patterns
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
