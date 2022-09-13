import {users} from "@prisma/client"

export type TypeUsersData = Omit<users, 'id'>;
export type UpdateUsersData = Partial<users>;
