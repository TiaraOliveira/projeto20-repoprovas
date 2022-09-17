import * as addTestRepositories from '../repositories/addTestRepositories';
import { CreateTestData } from '../types/testTypes';


export async function insert(test: CreateTestData ) {

   const verifiedexistCategory =  await addTestRepositories.existsCategory(test.category)

  if(!verifiedexistCategory) throw {type: "error_bad_request",
    message: `Categoria inexistente`}
    console.log(verifiedexistCategory)

    const verifiedexistTeacher =  await addTestRepositories.existsTeacher(test.teacher)

    if(!verifiedexistTeacher) throw {type: "error_bad_request",
      message: `Professor inexistente`}

      const verifiedexistDiscipline =  await addTestRepositories.existsdiscipline(test.discipline)

  if(!verifiedexistDiscipline) throw {type: "error_bad_request",
    message: `Disciplina inexistente`}



  const exisrelationteacherdiscipline =  await addTestRepositories.existsteacherdisciplinebyId(verifiedexistTeacher.teacherId, verifiedexistDiscipline.disciplineId,)

  if(!exisrelationteacherdiscipline) throw {type: "error_bad_request",
    message: `Professor inexistente não leciona esta disciplina`}
    
   await addTestRepositories.insert(test.name, test.pdfUrl, verifiedexistCategory.id, exisrelationteacherdiscipline.id,  );
}