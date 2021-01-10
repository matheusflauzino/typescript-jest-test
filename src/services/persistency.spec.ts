import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return undefined', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  test('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  test('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
