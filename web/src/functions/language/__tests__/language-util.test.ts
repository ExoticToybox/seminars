import { describe, expect, it } from 'vitest';

import { nonNullable } from '../language-util';

describe('language-util', () => {
  describe('nonNullable', () => {
    const array = [0, 1, '', 'hello', true, false, null, undefined];
    it('null and undefined are removed', () => {
      expect(array.filter(nonNullable)).toEqual([
        0,
        1,
        '',
        'hello',
        true,
        false,
      ]);
    });
  });
});
