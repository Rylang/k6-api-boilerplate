import { jsonplaceholderApi } from '../../services/jsonplaceholder.js';
import { describe, expect } from '../../libs/k6chai.js';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    albums: {
      executor: 'ramping-arrival-rate',
      startRate: 1,
      timeUnit: '1m',
      preAllocatedVUs: 4,
      stages: [
        { target: 10, duration: '20s' },
        { target: 20, duration: '20s' },
        { target: 30, duration: '20s' },
        { target: 30, duration: '3m' },
      ],
    },
  },
};

/**
 * This test executes a "normal" sized throughput against the /albums endpoint
 */
export default function() {
  describe('GET - /albums', () => {
    const response = jsonplaceholderApi.getAlbums();
    expect(response.status, 'response status code').to.equal(200);
    expect(response.timings.duration, 'request duration').to.be.lessThan(300);
  });
}
