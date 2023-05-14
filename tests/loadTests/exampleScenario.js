import { group, sleep } from 'k6';
import { smokeTest } from '../../options/smokeTest.js';
import { k6TestApi } from '../../services/k6TestApi.js';
import { describe, expect } from '../../libs/k6chai.js';

export const options = smokeTest;

export default function() {
  // TODO
}
