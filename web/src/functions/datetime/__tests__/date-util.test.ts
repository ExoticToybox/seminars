import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';

import { formatDate, toUtcDate } from '../date-util';

describe('date-util', () => {
  describe('toUtcDate', () => {
    it('converts zero-padded string', () => {
      const date = toUtcDate('2000-01-01');
      expect(date.toUnixInteger()).equals(
        DateTime.utc(2000, 1, 1).toUnixInteger(),
      );
    });
    it('converts non zero-padded string', () => {
      const date = toUtcDate('1999-12-31');
      expect(date.toUnixInteger()).equals(
        DateTime.utc(1999, 12, 31).toUnixInteger(),
      );
    });
  });
  describe('formatDate', () => {
    it('formats single digit', () => {
      const date = DateTime.utc(2000, 1, 1);
      expect(formatDate(date)).equals('2000年1月1日');
    });
    it('formats double digits', () => {
      const date = DateTime.utc(1999, 12, 31);
      expect(formatDate(date)).equals('1999年12月31日');
    });
  });
});
