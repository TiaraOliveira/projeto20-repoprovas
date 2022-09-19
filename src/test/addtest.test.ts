import { prisma } from '../postgress'
import supertest from 'supertest';
import app from '../index';
import { faker } from '@faker-js/faker';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test addTest Routes',  () => {
 

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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(201);
  
  });

  it('Deve retornar 401 quando enviado token invalido', async () => {
    const token = 'eyJobGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0aWFyYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMSRaMWZwU1pic2JvWEFydC5tQkNXbnN1Y2NRUkdYNWlkNlNXek1BazdyY08vcWJ1dEhYY3E2TyIsImlhdCI6MTY2MzUxMjkzNiwiZXhwIjoxNjYzNTk5MzM2fQ.DKFkSZiAfz_7y6ZDjPikgbPu2uAxXk2487WTgTlNAH4'
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(401);
  
  });

  it('Deve retornar 401 quando enviado token invalido', async () => {
    const token = ''
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(400);
  
  });

  it('Deve retornar 400 caso professor não exista', async () => {
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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Samuelllllll",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(400);
  
  });

  it('Deve retornar 400 caso disciplina não exista', async () => {
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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSSssssssssss"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(400);
  
  });
  
  
  it('Deve retornar 400 caso disciplina não seja lecionada pelo professor enviado não exista', async () => {
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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"Autoconfiança"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(400);
  
  });

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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(201);
  
  });

  it('Retornar status 422 caso pdfUrf não seja enviado em pdf', async () => {
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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "https://hub.driven.com.br/computacao",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(422);
  
  });
  it('Retornar status 422 caso pdfUrf não seja enviado em https', async () => {
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
    const token = logusser.body.token
   
      const test = {
        name: faker.lorem.words(4),
        pdfUrl: "hub.driven.com.br/computacao.pdf",
        category:"Projeto",
        teacher:"Diego Pinho",
        discipline:"HTML e CSS"
      }
    const result = await supertest(app).post("/addtest").set({Authorization : `Bearer ${token}`}).send(test);
    
    expect(result.status).toBe(422);
  
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
