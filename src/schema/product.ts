import { z } from 'zod';

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    discount: z.number().optional(),
    size: z.enum(['S', 'M', 'L', 'XL']).optional(),
    stock: z.number(),
    images: z.array(z.string().url()),
    category: z.string(),
    tags: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;
