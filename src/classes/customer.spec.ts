import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createInividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('EnterpriseCustomer', () => {
  test('should have firstName, lastName, and cpf', () => {
    const sut = createInividualCustomer(
      'Matheus',
      'Flauzino',
      '111.111.111-11',
    );
    expect(sut).toHaveProperty('firstName', 'Matheus');
    expect(sut).toHaveProperty('lastName', 'Flauzino');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  test('should have methods to get name and idn', () => {
    const sut = createInividualCustomer(
      'Matheus',
      'Flauzino',
      '111.111.111-11',
    );

    expect(sut.getName()).toBe('Matheus Flauzino');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('IndividualCustomer', () => {
  test('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa X', '222.222.111-11');
    expect(sut).toHaveProperty('name', 'Empresa X');
    expect(sut).toHaveProperty('cnpj', '222.222.111-11');
  });

  test('should have methods to get name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa X', '222.222.111-11');

    expect(sut.getName()).toBe('Empresa X');
    expect(sut.getIDN()).toBe('222.222.111-11');
  });
});
