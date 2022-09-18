import * as addTestRepositories from '../repositories/addTestRepositories';
import * as testDisciplineRepositories from '../repositories/testDisciplineRepositories';
import * as testTeachersRepositories from '../repositories/testTeachersRepositories'

export async function viewTestTeacher() {


  const gettestdiscipline = await testTeachersRepositories.gettestTeacher()
 
   return gettestdiscipline 
}