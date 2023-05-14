export const smokeTest = {
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