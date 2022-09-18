import { number } from 'joi';
import { prisma } from '../postgress';

export async function gettestdiscipline() {
     return prisma.terms.findMany({
        orderBy:{number:'asc'},
        select:{
            number: true,
            discipline:{
                select:{
                    name:true,
                    teachersDiscipline:{
                    
                        select:{
                            
                            test:{
                                select:{
                                    id:true,
                                    name:true,
                                    pdfUrl: true,
                                    teachersDiscipline:{
                                        select:{
                                            teacher:{
                                                select:{
                                                    name: true
                                                }
                                               
                                            }
                                        }
                                    },
                                    category:{
                                        select:{
                                            name: true,
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
