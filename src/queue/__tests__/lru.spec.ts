import { LRU } from "../lru";

describe("LRU", () => {
  describe("access serial is [1,2,5,1,6,7,6]", () => {
    it("should cache [7, 6, 1]", () => {
      const lru = new LRU<number>(3);

      lru.accessData(1);
      lru.accessData(2);
      lru.accessData(5);
      lru.accessData(1);
      lru.accessData(6);
      lru.accessData(7);
      lru.accessData(6);

      expect(lru.cache).toEqual(new Set([7, 6, 1]));
      expect(lru).toMatchSnapshot();
    });
  });
});
