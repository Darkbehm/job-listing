import { type PrismaClient } from "@prisma/client";
import { seedJob } from "./jobSeeder";
import { seedLanguages } from "./languageSeeder";
import { seedTools } from "./toolsSeeder";

export const seed = async (prisma: PrismaClient): Promise<void> => {
  await seedLanguages(prisma);
  await seedTools(prisma);
  await seedJob(prisma);
};
