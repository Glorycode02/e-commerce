import getProducts from "@/lib/getProducts";
import { Hero, ProductCard } from "@/components/export";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const data = await getProducts();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Hero />
      <div className="mt-12 px-16 py-16 w-full">
        <div className="w-full h-auto px-3 py-3">
          <h1 className="text-xl font-bold  text-gray-900 sm:text-2xl max-md:text-4xl">
            Our popular <span className="text-orange-500">Products</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Lets explore our products and get a detailed description.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">

          {data.map((product: any) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
