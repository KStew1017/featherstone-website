/*
  Warnings:

  - You are about to drop the column `email` on the `Tenants` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Tenants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[business_phone]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cell_phone]` on the table `Tenants` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Tenants_email_key";

-- DropIndex
DROP INDEX "Tenants_phone_key";

-- AlterTable
ALTER TABLE "Tenants" DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "business_phone" TEXT,
ADD COLUMN     "cell_phone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_business_phone_key" ON "Tenants"("business_phone");

-- CreateIndex
CREATE UNIQUE INDEX "Tenants_cell_phone_key" ON "Tenants"("cell_phone");
