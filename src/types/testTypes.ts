import {tests} from "@prisma/client"




interface User {
    name: string;
    pdfUrl: string;
    category: string;
    discipline: string;
    teacher: string;
  }
  
export type CreateTestData = Omit<User, "id">;
export type TypeTestData = Omit<tests, 'id'>;
