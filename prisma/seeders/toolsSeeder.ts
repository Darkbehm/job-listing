import { type PrismaClient } from "@prisma/client";

const DATA = [
  {
    tools: ["React"],
  },
  {
    tools: ["React", "Sass"],
  },
  {
    tools: ["Ruby", "Sass"],
  },
  {
    tools: ["RoR"],
  },
  {
    tools: ["Sass"],
  },
  {
    tools: ["Vue", "Sass"],
  },
  {
    tools: ["Django"],
  },
  {
    tools: ["React", "Sass"],
  },
];

export const seedTools = async (prismaClient: PrismaClient) => {
  const tools = new Set<string>();
  DATA.forEach((item) => {
    item.tools.forEach((tool) => tools.add(tool));
  });

  const data = [...tools].map((tool) => ({
    name: tool,
  }));

  await prismaClient.tools.createMany({
    data,
  });
};
