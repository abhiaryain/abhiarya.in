import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_TOKEN: z
      .string({
        message: "Environment variable GITHUB_TOKEN must be a string.",
      })
      .min(1, {
        message:
          "GITHUB_TOKEN is required and cannot be empty. Please provide a valid GitHub token.",
      }),
  },
  experimental__runtimeEnv: process.env,
});

// Used to validate the environment variables at build time in next.config.ts
export const validateEnv = () => env;
