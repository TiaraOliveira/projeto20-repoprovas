/*
  Warnings:

  - Added the required column `teachersDisciplinesId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "teachersDisciplinesId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "teachersdisciplines" (
    "id" SERIAL NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "teachersdisciplines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teachersDisciplinesId_fkey" FOREIGN KEY ("teachersDisciplinesId") REFERENCES "teachersdisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersdisciplines" ADD CONSTRAINT "teachersdisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersdisciplines" ADD CONSTRAINT "teachersdisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
