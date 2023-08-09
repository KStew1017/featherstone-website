/*
  Warnings:

  - A unique constraint covering the columns `[unitId]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tenant_unitId_key" ON "Tenant"("unitId");
