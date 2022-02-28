import { str } from './function_str.js';

describe('test for str function', () => {
    
      it('should reverse string', () => {
        expect(str('Hello')).toBe('olleH');
      });

      it('add not string', () => {
        expect(str(NaN)).toBe('данные не найдены');
      });

      it('add number', () => {
        expect(str(5)).toBe('данные не найдены');
      });
})
