import SALESFORCE_IP_RANGE from './index';
import { SALESFORCE_IP_RANGE as NAMED_EXPORT } from './index';

describe('SALESFORCE_IP_RANGE', () => {
  describe('assert exports are correct', () => {
    it('exports the ip list via default export', async () => {
      expect(SALESFORCE_IP_RANGE).not.toBe(undefined);
      expect(SALESFORCE_IP_RANGE.length > 0).toBe(true);
    });

    it('exports the ip list via named export', async () => {
      expect(NAMED_EXPORT).not.toBe(undefined);
      expect(NAMED_EXPORT.length > 0).toBe(true);
    });
  });
});
