/*
  Warnings:

  - The primary key for the `disciplines` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `disciplines` table. All the data in the column will be lost.
  - The primary key for the `teachers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `teachers` table. All the data in the column will be lost.
  - The primary key for the `terms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `terms` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_termId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_teacherId_fkey";

-- AlterTable
ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_pkey",
DROP COLUMN "id",
ADD COLUMN     "disciplineId" SERIAL NOT NULL,
ADD CONSTRAINT "disciplines_pkey" PRIMARY KEY ("disciplineId");

-- AlterTable
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_pkey",
DROP COLUMN "id",
ADD COLUMN     "teacherId" SERIAL NOT NULL,
ADD CONSTRAINT "teachers_pkey" PRIMARY KEY ("teacherId");

-- AlterTable
ALTER TABLE "terms" DROP CONSTRAINT "terms_pkey",
DROP COLUMN "id",
ADD COLUMN     "termId" SERIAL NOT NULL,
ADD CONSTRAINT "terms_pkey" PRIMARY KEY ("termId");

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "terms"("termId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("disciplineId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("teacherId") ON DELETE RESTRICT ON UPDATE CASCADE;
