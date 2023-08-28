import { PrismaClient } from "@prisma/client";
import { seed } from "./seeders";

const prisma = new PrismaClient();
async function main() {
  await seed(prisma);
  console.log("prisma client generated");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
