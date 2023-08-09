/*
  Warnings:

  - You are about to drop the column `number` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the `_ConnectedUnits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ConnectedUnits" DROP CONSTRAINT "_ConnectedUnits_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConnectedUnits" DROP CONSTRAINT "_ConnectedUnits_B_fkey";

-- DropIndex
DROP INDEX "Unit_number_key";

-- DropIndex
DROP INDEX "Unit_tenantId_key";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "number",
ADD COLUMN     "numberId" INTEGER;

-- DropTable
DROP TABLE "_ConnectedUnits";

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_numberId_fkey" FOREIGN KEY ("numberId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
