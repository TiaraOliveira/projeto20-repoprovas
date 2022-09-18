import { faker } from '@faker-js/faker';

export default async function signUpFactorycorrect() {
    return {
        email: faker.internet.email(),
        password: '12345678910',
        password_confirmation: '12345678910',
      
    }
}

