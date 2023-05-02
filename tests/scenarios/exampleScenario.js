import { group, sleep } from 'k6';
import { smokeTest } from '../../options/smokeTest.js';
import { checkForResponseCode } from '../../helpers/checks.js';
import { k6TestApi } from '../../services/k6TestApi.js';

export const options = smokeTest;

export default function() {
  group('Crocidile Requests', () => {
    const response = k6TestApi.getCrocodiles();
    checkForResponseCode(200, response);
    sleep(1);  
  });
}
