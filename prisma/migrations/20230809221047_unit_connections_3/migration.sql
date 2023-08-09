/*
  Warnings:

  - You are about to drop the `Tenant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_numberId_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_tenantId_fkey";

-- DropTable
DROP TABLE "Tenant";

-- DropTable
DROP TABLE "Unit";

-- CreateTable
CREATE TABLE "Units" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "building" INTEGER NOT NULL,
    "squareFeet" INTEGER NOT NULL DEFAULT 1250,
    "bathroom" BOOLEAN NOT NULL DEFAULT true,
    "office" BOOLEAN NOT NULL DEFAULT false,
    "occupied" BOOLEAN NOT NULL DEFAULT false,
    "tenantId" INTEGER,

    CONSTRAINT "Units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenants" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConnectedUnits" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Units_number_key" ON "Units"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_email_key" ON "Tenants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_phone_key" ON "Tenants"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "_ConnectedUnits_AB_unique" ON "_ConnectedUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ConnectedUnits_B_index" ON "_ConnectedUnits"("B");

-- AddForeignKey
ALTER TABLE "Units" ADD CONSTRAINT "Units_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConnectedUnits" ADD CONSTRAINT "_ConnectedUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "Units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConnectedUnits" ADD CONSTRAINT "_ConnectedUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "Units"("id") ON DELETE CASCADE ON UPDATE CASCADE;
