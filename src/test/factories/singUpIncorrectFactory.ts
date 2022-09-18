import { faker } from '@faker-js/faker';

export default async function signUpFactorywithoutpassword() {
    return {
        email: faker.internet.email(),
        password: '',
        password_confirmation: '12345678910',
      
    }
}