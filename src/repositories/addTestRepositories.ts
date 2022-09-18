import { prisma } from '../postgress';
import { TypeTestData } from '../types/testTypes';

export async function insert(name: string, pdfUrl: string, categoryId: number, teachersDisciplinesId: number ) {
  console.log(name)
  console.log(pdfUrl)
  console.log(categoryId)
  console.log(teachersDisciplinesId)
 const x =   await prisma.tests.create( { data: {name, pdfUrl, categoryId, teachersDisciplinesId}} );

}

export async function existsCategory(category: string) {
    return await prisma.categories.findUnique({
        where: {
          name: category
        },
        
      });
    
}

export async function existsTeacher(teacher: string) {
    return await prisma.teachers.findUnique({
        where: {
          name: teacher
        },
        
      });
    
}
export async function existsdiscipline(discipline: string) {
    return await prisma.disciplines.findUnique({
        where: {
          name: discipline
        },
        
      });
    
}

export async function existsteacherdisciplinebyId(teacher: number, discipline: number) {
  
    return await prisma.teachersDisciplines.findFirst({
        where: {
            teacherId: teacher,
            disciplineId: discipline
        },
        
      });
}