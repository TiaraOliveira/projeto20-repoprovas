import { faker } from '@faker-js/faker';

export default async function signInFactorywithoutpassword() {
    return {
        email: faker.internet.email(),
        password: '',
     }
}