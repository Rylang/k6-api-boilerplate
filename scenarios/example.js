import http from 'k6/http';
import { sleep } from 'k6';
import { smokeTest } from '../options/smokeTest.js';
import { checkForResponseCode } from '../helpers/checks.js';

export const options = smokeTest;

export default function () {
  const response = http.get('https://test-api.k6.io/public/crocodiles/');
  checkForResponseCode(200, response);
  sleep(1);
}
