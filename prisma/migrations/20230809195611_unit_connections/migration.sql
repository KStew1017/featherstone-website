/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - Made the column `phone` on table `Tenant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Unit" ALTER COLUMN "squareFeet" SET DEFAULT 1250,
ALTER COLUMN "office" SET DEFAULT false;

-- CreateTable
CREATE TABLE "_ConnectedUnits" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConnectedUnits_AB_unique" ON "_ConnectedUnits"("A", "B");

-- CreateIndex
CREATE INDEX "_ConnectedUnits_B_index" ON "_ConnectedUnits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_phone_key" ON "Tenant"("phone");

-- AddForeignKey
ALTER TABLE "_ConnectedUnits" ADD CONSTRAINT "_ConnectedUnits_A_fkey" FOREIGN KEY ("A") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConnectedUnits" ADD CONSTRAINT "_ConnectedUnits_B_fkey" FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
