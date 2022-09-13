import { prisma } from '../postgress';
import { TypeUsersData } from '../types/userTypes';

export async function getUserByEmail(email: string){
    const result = prisma.users.findUnique({where: {email}})
    return result
}

export async function createUser(user: TypeUsersData){
    await prisma.users.create({ data: user });
    
}
