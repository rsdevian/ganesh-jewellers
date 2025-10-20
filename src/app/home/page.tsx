"use client";

import { Product } from "@/types/product";
import { useEffect } from "react";

import { useRouter } from "next/navigation";

const products: Product[] = [
    {
        id: "1",
        name: "Sample Product",
        description: "This is a sample product description.",
        price: 19.99,
        imageUrl: "/images/sample-product.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        name: "Another Product",
        description: "This is another product description.",
        price: 29.99,
        imageUrl: "/images/another-product.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const Page = () => {
    const route = useRouter();
    useEffect(() => {
        route.push("/login");
    }, []);

    return null;
};

export default Page;
