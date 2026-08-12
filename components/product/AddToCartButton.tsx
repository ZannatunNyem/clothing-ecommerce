"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";

interface AddToCartButtonProps {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = existingCart.find(
      (item: any) => item._id === product._id,
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item: any) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-5 py-3 font-medium text-white transition hover:bg-pink-600"
    >
      {added ? (
        <>
          <Check size={18} />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          Add to Cart
        </>
      )}
    </button>
  );
}
