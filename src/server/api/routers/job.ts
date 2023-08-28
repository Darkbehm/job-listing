import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createJobInput } from "~/types/job";

export const jobRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.prisma.job.findMany({
      include: {
        JobTools: {
          include: {
            tool: true,
          },
        },
        JobLanguages: {
          include: {
            lang: true,
          },
        },
      },
    });

    return jobs.map((job) => {
      const { role, level, JobLanguages, JobTools, ...rest } = job;
      const filters = [
        role,
        level,
        ...JobLanguages.map((item) => {
          return item.lang.name;
        }),
        ...JobTools.map((item) => {
          return item.tool.name;
        }),
      ];
      return {
        ...rest,
        filters,
        JobLanguages,
        JobTools,
      };
    });
  }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.job.findUniqueOrThrow({
          where: {
            id: input.id,
          },
          include: {
            JobTools: {
              include: {
                tool: true,
              },
            },
            JobLanguages: {
              include: {
                lang: true,
              },
            },
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: JSON.stringify(error),
        });
      }
    }),
  create: publicProcedure
    .input(createJobInput)
    .mutation(async ({ ctx, input }) => {
      const { languages, tools, ...rest } = input;

      const jobTools =
        tools?.map((item) => {
          return {
            toolId: item,
          };
        }) || [];

      const jobLanguages =
        languages?.map((item) => {
          return {
            langId: item,
          };
        }) || [];

      return await ctx.prisma.job.create({
        data: {
          ...rest,
          JobTools: {
            createMany: {
              data: jobTools,
            },
          },
          JobLanguages: {
            createMany: {
              data: jobLanguages,
            },
          },
        },
      });
    }),
});
