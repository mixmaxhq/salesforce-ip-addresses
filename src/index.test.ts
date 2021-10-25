import nock from 'nock';
import Environment from '@mixmaxhq/environment';
import API from '.';
beforeAll(() => {
  nock.disableNetConnect();
  nock('https://app-local.mixmax.com').get('/health/elb').reply(200, '');
});
describe('API', () => {
  let client;
  beforeEach(() => {
    client = new API({
      environment: Environment.LOCAL,
    });
  });
  describe('service functions', () => {
    it('should make a request to the endpoint', async () => {
      await expect(client.checkAppHealth()).resolves.toBeTruthy();
    });
  });
});
