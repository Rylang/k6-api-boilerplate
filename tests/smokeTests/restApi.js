import { smokeTest } from '../../options/smokeTest.js';
import { k6TestApi } from '../../services/k6TestApi.js';
import { describe, expect } from '../../libs/k6chai.js';

export const options = smokeTest;

export default function() {
  describe('GET - /public/crocodiles', () => {
    const response = k6TestApi.getCrocodiles();
    expect(response.status, 'response status').to.equal(200);
    expect(response.timings.duration, 'request duration').to.be.below(100);
  });
}
