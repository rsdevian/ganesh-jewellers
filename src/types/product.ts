// src/types/product.ts
export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string; // optional field for product image
    createdAt: string;
    updatedAt: string;
};
