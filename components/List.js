import { useRouter } from "next/router";
import React from "react";
import products from "../pages/products";

const List = () => {
  const router = useRouter();
  return (
    <div className=" h-full  p-10 ">
      <div className="flex flex-wrap  ">
        {productData.map((product) => (
          <div
            className="w-72 flex flex-wrap mx-5 my-5  justify-between items-center"
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
          >
            <img alt="product" orientation="top" src={product.img} />
            <div>
              <div className="text-2xl">{product.title}</div>
              <div className="text-lg">{product.description}</div>
              <button
                href="#"
                className="p-3 mt-2 mb-2 text-slate-100 bg-red-600 rounded-full"
              >
                Go somewhere
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { List };

const productData = [
  {
    id: 1,
    img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5d2cf9e4/products/NI_DC3728-003/NI_DC3728-003-1.JPG",
    title: "Nike Shoes",
    description: "The best Nike Shoes you ever will see in this shop",
  },
  {
    id: 2,
    img: "https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.jpg",
    title: "Shirt Adidas",
    description: "Run For the Ocean ADIDAS",
  },
  {
    id: 3,
    img: "https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.jpg",
    title: "Vibrator 2000X",
    description: "If you want to complace your GF use it :D",
  },
  {
    id: 4,
    img: "https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.jpg",
    title: "Penis Eletric ",
    description: "if you are tired afther the work use this :D",
  },
  {
    id: 5,
    img: "https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.jpg",
    title: "Nike Shoes",
    description: "The best Nike Shoes you ever will see in this shop",
  },
  {
    id: 6,
    img: "https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.jpg",
    title: "Vagina Elastic",
    description: "You know what they said, a one vladimir before go to the bed",
  },
];
