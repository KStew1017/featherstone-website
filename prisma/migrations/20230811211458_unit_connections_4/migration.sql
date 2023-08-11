/*
  Warnings:

  - You are about to drop the column `firstName` on the `Tenants` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Tenants` table. All the data in the column will be lost.
  - You are about to drop the column `squareFeet` on the `Units` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Units` table. All the data in the column will be lost.
  - The `number` column on the `Units` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_ConnectedUnits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Units" DROP CONSTRAINT "Units_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "_ConnectedUnits" DROP CONSTRAINT "_ConnectedUnits_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConnectedUnits" DROP CONSTRAINT "_ConnectedUnits_B_fkey";

-- AlterTable
ALTER TABLE "Tenants" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "first_name" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "last_name" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Units" DROP COLUMN "squareFeet",
DROP COLUMN "tenantId",
ADD COLUMN     "square_feet" INTEGER NOT NULL DEFAULT 1250,
ADD COLUMN     "tenant_id" INTEGER,
DROP COLUMN "number",
ADD COLUMN     "number" TEXT[];

-- DropTable
DROP TABLE "_ConnectedUnits";

-- CreateIndex
CREATE UNIQUE INDEX "Units_number_key" ON "Units"("number");

-- AddForeignKey
ALTER TABLE "Units" ADD CONSTRAINT "Units_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
