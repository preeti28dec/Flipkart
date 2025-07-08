import { useRouter } from "next/router";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import { Image } from 'next/image';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="p-8 flex flex-col md:flex-row gap-6">
        <Image src={product.image} alt="image load" className="w-full md:w-1/2 object-contain h-96" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-green-600 text-xl mt-2">₹{product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
