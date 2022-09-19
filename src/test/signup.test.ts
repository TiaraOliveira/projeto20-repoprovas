import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import app from '../index';
import { prisma } from '../postgress'
import signUpFactorycorrect from './factories/signUpcorrectFactory';
import signUpFactorywithoutpassword from './factories/singUpIncorrectFactory';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test signup Routes',  () => {

  it('Deve retornar status 409 caso já exista um user com referente titulo', async () => {
    const body =  {
      email: "sam@gmail.com",
      password: '12345678910',
      password_confirmation: '12345678910'
    }
   
    await supertest(app).post('/signup').send(body);

    const result = await supertest(app).post('/signup').send(body);

    expect(result.status).toBe(409);
  });


  it('Deve retornar status 201 caso já exista um user com referente titulo', async () => {
    const user =  await signUpFactorycorrect()
    
    const result = await supertest(app).post('/signup').send(user);

    expect(result.status).toBe(201);
  });
 


  
 

  it('Deve retornar status 422 caso não envie a senha', async () => {
    const user =  await signUpFactorywithoutpassword()
   
    const result = await supertest(app).post('/signup').send(user);

    expect(result.status).toBe(422);
  });
});
