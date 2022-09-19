import { prisma } from '../postgress'
import supertest from 'supertest';
import app from '../index';


beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});



describe('Test signIn Routes',  () => {
  
  it('Deve retornar status 400 caso envie senha não correspondente com usuario', async () => {
    const body =  {
      email: "tiara@gmail.com",
      password: '12345678910',
      password_confirmation: '12345678910'
    }

    await supertest(app).post(`/signup`).send(body);
    
    const wrong = {
      "email": "tiara@gmail.com",
      "password": "xxxxxxxxxxx"
    };

    const result = await supertest(app).post(`/signin`).send(wrong);

    expect(result.status).toBe(400);
    
  });
  
  it('Deve logar um cliente e retornar status 201', async () => {
    const body =  {
      email: "tiara@gmail.com",
      password: '12345678910',
      password_confirmation: '12345678910'
    }
    const user = {
      "email": "tiara@gmail.com",
      "password": "12345678910"
  }
    await supertest(app).post(`/signup`).send(body);

    const result = await supertest(app).post(`/signin`).send(user);

    expect(result.status).toBe(201);
    expect(result.text).not.toBeNull();
  });

 
  it('Deve retornar status 422 caso não envie a senha', async () => {
    
    const wrong = {
      "email": "tiara@gmail.com",
      "password": ""
    };

    const result = await supertest(app).post(`/signin`).send(wrong);

    expect(result.status).toBe(422);
    
  });

  it('Deve retornar status 422 caso não envie a login', async () => {

    const wrong = {
      "email": "",
      "password": "12345678910"
    };

    const result = await supertest(app).post(`/signin`).send(wrong);

    expect(result.status).toBe(422);
    
  });
  

 
});


afterAll(async () => {
  await prisma.$disconnect();
});




 