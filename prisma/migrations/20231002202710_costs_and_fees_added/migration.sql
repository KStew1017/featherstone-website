-- AlterTable
ALTER TABLE "Tenants" ADD COLUMN     "lease_amount" INTEGER DEFAULT 0,
ADD COLUMN     "maintenance_fee" INTEGER DEFAULT 0,
ADD COLUMN     "parking_fee" INTEGER DEFAULT 0;
