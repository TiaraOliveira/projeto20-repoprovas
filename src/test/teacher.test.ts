import { prisma } from '../postgress'
import supertest from 'supertest';
import app from '../index';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test teachers Routes', () => {
 

  it('Deve retornar as provas por professores', async () => {
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

    const result = await supertest(app).get("/teachers").set({Authorization : `Bearer ${token}`}).send();
    
    expect(result.body).toBeInstanceOf(Object);
  
  });

  it('Deve retornar erro ao não enviar o token', async () => {
  

    const result = await supertest(app).get("/teachers").set({Authorization : `Bearer `}).send();
    
    expect(result.status).toBe(400)
  
  });
  
  it('Deve retornar erro ao enviar o token errado', async () => {
  
    const token = 'eyJobGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0aWFyYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMSRaMWZwU1pic2JvWEFydC5tQkNXbnN1Y2NRUkdYNWlkNlNXek1BazdyY08vcWJ1dEhYY3E2TyIsImlhdCI6MTY2MzUxMjkzNiwiZXhwIjoxNjYzNTk5MzM2fQ.DKFkSZiAfz_7y6ZDjPikgbPu2uAxXk2487WTgTlNAH4'
    const result = await supertest(app).get("/teachers").set({Authorization : `Bearer ${token}`}).send();
    
    expect(result.status).toBe(401)
  
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});