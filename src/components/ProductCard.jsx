"use client";
import Link from "next/link";
import Image from "next/image";
const ProductCard = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition">
          <div className="relative w-full h-48">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="font-semibold mt-2">{product.title}</h2>
          <p className="text-green-600 font-bold">₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
