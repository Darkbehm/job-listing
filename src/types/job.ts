import { z } from "zod";

export const createJobInput = z.object({
  company: z.string({
    required_error: "Compañia es requerida",
  }).trim().min(3, {
    message: "Compañia debe tener al menos 3 caracteres",
  }).max(64, {
    message: "Compañia debe tener como máximo 64 caracteres",
  }),
  logo: z.string(
    {
      required_error: "Logo es requerido",
    }
  ),
  new: z.boolean({
    required_error: "New es requerido",
  }),
  featured: z.boolean(
    {
      required_error: "Featured es requerido",
    }
  ),
  position: z.string(
    {
      required_error: "Posición es requerida",
    }
  ),
  role: z.string({
    required_error: "Rol es requerido",
  }),
  level: z.string({
    required_error: "Nivel es requerido",
  }),
  postedAt: z.string({
    required_error: "Fecha de publicación es requerida",
  }),
  contract: z.string({
    required_error: "Contrato es requerido",
  }),
  location: z.string({
    required_error: "Ubicación es requerida",
  }),
  languages: z.array(z.number()).optional(),
  tools: z.array(z.number()).optional(),
});

export type CreateJobInputSchema = z.infer<typeof createJobInput>;
