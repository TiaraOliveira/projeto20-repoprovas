import * as addTestRepositories from '../repositories/addTestRepositories';
import { CreateTestData } from '../types/testTypes';
import * as testDisciplineRepositories from '../repositories/testDisciplineRepositories';

export async function viewTestDiscipline(disciplineId: number) {

  
  const verifiedexistDiscipline =  await addTestRepositories.existsdisciplinebyId(disciplineId)

  if(!verifiedexistDiscipline) throw {type: "error_bad_request",
    message: `Disciplina inexistente`}


  const gettestdiscipline = await testDisciplineRepositories.gettestdiscipline(disciplineId)
  console.log(gettestdiscipline)
   return gettestdiscipline 
}