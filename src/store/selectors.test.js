import { getAdverts } from './selectors'

describe('getAdverts', () => {
    const data = [
      { updatedAt: '1', id: 'a' },
      { updatedAt: '2', id: 'b' },
      { updatedAt: '3', id: 'c' },
    ];
    test('should return all adverts', () => {
      const result = getAdverts({ adverts: { data } });
      expect(result).toHaveLength(data.length);
    });
    test('should return adverts sorted by updateAt desc', () => {
      const result = getAdverts({ adverts: { data } });
      expect(result[0].id).toBe('c');
    });
  });