import { type PrismaClient } from "@prisma/client";

const DATA = [
  {
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    languages: ["Python"],
  },
  {
    languages: ["JavaScript"],
  },
  {
    languages: ["CSS", "JavaScript"],
  },
  {
    languages: ["JavaScript"],
  },
  {
    languages: ["Ruby"],
  },
  {
    languages: ["HTML", "JavaScript"],
  },
  {
    languages: ["JavaScript"],
  },
  {
    languages: ["JavaScript", "Python"],
  },
  {
    languages: ["JavaScript"],
  },
];

export const seedLanguages = async (prismaClient: PrismaClient) => {
  const languages = new Set<string>();
  DATA.forEach((item) => {
    item.languages.forEach((language) => languages.add(language));
  });

  const data = [...languages].map((language) => ({
    name: language,
  }));

  await prismaClient.languages.createMany({
    data,
  });
};
