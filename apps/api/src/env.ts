import z from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']),
    PORT: z.preprocess(Number, z.number()),
    SEARCH_URL: z.string().url(),
});

const parsedEnvSchema = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>
export const env = {
  ...parsedEnvSchema,
  IS_PROD: parsedEnvSchema.NODE_ENV === 'production',
  IS_DEV: parsedEnvSchema.NODE_ENV === 'development',
};
