import { prisma } from '../postgress'
import supertest from 'supertest';
import app from '../index';
import { faker } from '@faker-js/faker';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test addTest Routes', () => {
 

  it('Deve adicionar uma ṕrova e retornar status 201 e o objeto', async () => {
    const body =  {
      email: "tiara@gmail.com",
      password: '12345678910',
      password_confirmation: '12345678910'
    }
    await supertest(app).post(`/signup`).send(body);

    const login =  {
      email: "tiara@gmail.com",
      password: '12345678910',
      
    }
    const logusser = await supertest(app).post(`/signin`).send(login);
    const token = logusser.text
const test = {
  name: faker.lorem.words(4),
  pdfUrl: faker.internet.avatar() + '.pdf',
  category: 'Projeto'  ,
  discipline: 'JavaScript',
  teacher: 'Diego Pinho'
}
    const result = await supertest(app).get("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(201);
  
  });

  
});

afterAll(async () => {
  await prisma.$disconnect();
});
