// src/types/order.ts
export type Order = {
    id: string;
    userId: string;
    productIds: string[];
    totalPrice: number;
    status: "pending" | "completed" | "cancelled";
    createdAt: string;
    updatedAt: string;
};
