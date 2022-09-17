import { number } from 'joi';
import { prisma } from '../postgress';

export async function gettestdiscipline(disciplineId:number) {
     return prisma.teachersDisciplines.findMany({
        where:{
            disciplineId:disciplineId
        },include:{
            discipline:{
                select:{
                    name:true,
                    terms:{
                        select:{
                            number: true,
                        }

                    }
                }
            },
            test:{
                select:{
                    id:true,
                    name:true,
                    pdfUrl:true
                }
            },
            teacher:true
        }
    })
}
