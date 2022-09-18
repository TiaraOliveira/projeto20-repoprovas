import { prisma } from '../postgress';

export async function gettestTeacher() {
     return prisma.teachers.findMany({
         select:{
             name: true,
             teachersDiscipline:{
                 select:{
                     test:{
                         select:{
                             category:{
                                select:{
                                    name: true,
                                    test:{
                                        select:{
                                            id: true,
                                            name: true,
                                            pdfUrl: true
                                              
                                        }
                                        
                                    }
                                }
                                
                                 
                             }
                         }
                     }
                 }
             }
         }
     })
}
