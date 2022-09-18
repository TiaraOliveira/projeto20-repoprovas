import * as testDisciplineRepositories from '../repositories/testDisciplineRepositories';

export async function viewTestDiscipline() {


  const gettestdiscipline = await testDisciplineRepositories.gettestdiscipline()
  console.log(gettestdiscipline)
   return gettestdiscipline 
}