-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "building" INTEGER NOT NULL,
    "squareFeet" INTEGER NOT NULL,
    "bathroom" BOOLEAN NOT NULL DEFAULT true,
    "office" BOOLEAN NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Unit_number_key" ON "Unit"("number");
