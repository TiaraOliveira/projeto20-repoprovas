import supertest from 'supertest';
import app from '../index';
import UserFactory from './factories/userFactory';



describe('Test signup Routes', () => {
 

  it('Deve criar um cadastro e retornar status 201', async () => {
    const user =  await UserFactory()
    const result = await supertest(app).post(`/signup`).send(user);

    expect(result.status).toBe(201);
    
  });

  it('Deve retornar status 409 caso já exista um user com referente titulo', async () => {
    const user =  await UserFactory()
    const result = await supertest(app).post(`/signup`).send(user);

    expect(result.status).toBe(409);
  });

  
});
