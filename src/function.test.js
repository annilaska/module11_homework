import { getPercents } from './function.js';

describe('test for getPercents function', () => {

  it('adds 90 * 40 / 100 to equal 36', () => {
    expect(getPercents(40, 90)).toBe(36);
  });

  it('if value is false equal error', () => {
    expect(getPercents(false)).toBe('Данные не найдены');
  });

  it('if value is \'\' equal error', () => {
    expect(getPercents('')).toBe('Данные не найдены');
  });

  it('adds "str" * 40 / 100 to equal error', () => {
    expect(getPercents(40, "str")).toBe('Одно или оба введённых значения не являются числом');
  });
  
  it('adds -90 * 40 / 100 to equal error', () => {
    expect(getPercents(40, -90)).toBe('Одно или оба введённых значения отрицательные или равны нулю');
  });

})
