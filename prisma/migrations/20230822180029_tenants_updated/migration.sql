/*
  Warnings:

  - The `number` column on the `Units` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tenants" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Units" DROP COLUMN "number",
ADD COLUMN     "number" INTEGER[];

-- CreateIndex
CREATE UNIQUE INDEX "Units_number_key" ON "Units"("number");
