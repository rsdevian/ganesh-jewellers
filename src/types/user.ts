// src/types/user.ts
export type User = {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: "admin" | "customer";
    createdAt: string;
    updatedAt: string;
};
