/*
  Warnings:

  - You are about to drop the column `unitId` on the `Tenant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tenantId]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Tenant" DROP CONSTRAINT "Tenant_unitId_fkey";

-- DropIndex
DROP INDEX "Tenant_unitId_key";

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "unitId";

-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "tenantId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Unit_tenantId_key" ON "Unit"("tenantId");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
