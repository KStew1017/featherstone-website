-- AlterTable
ALTER TABLE "Tenants" ALTER COLUMN "lease_amount" DROP DEFAULT,
ALTER COLUMN "maintenance_fee" DROP DEFAULT,
ALTER COLUMN "parking_fee" DROP DEFAULT;
