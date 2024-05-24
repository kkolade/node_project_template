import { describe, expect, it } from 'vitest';
import { add } from '../lib/add';

describe('The Add function', () => {
  it('Return the sum of 2 integers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
