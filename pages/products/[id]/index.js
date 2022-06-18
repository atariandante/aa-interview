import React from "react";
import { Header } from "../../../components/Header";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Carousel from "../../../components/Carousel";
import { useRouter } from "next/router";

const product = {
  id: 1,
  img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5d2cf9e4/products/NI_DC3728-003/NI_DC3728-003-1.JPG",
  title: "Nike Shoes",
  price: "14.999$",
  itemNo: "Item No. NI_DC3728-003",
  description: "The best Nike Shoes you ever will see in this shop",
  sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
};

const ProductID = () => {
  const { query } = useRouter();

  console.log(query.id);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div>
        <div className="flex flex-wrap w-full mt-20  items-center justify-center">
          <div
            className="  flex  flex-wrap mx-5 my-5  justify-around items-center"
            key={product.id}
          >
            <Carousel />

            <div className="font-serif lg:mr-44  ml-10 sm:m-0">
              <div className="text-4xl ">{product.title}</div>

              <div className="text-2xl  mt-3">{product.itemNo}</div>

              <div className="text-2xl  mt-3">{product.description}</div>

              <div className="text-lg  mt-3">{product.price}</div>

              <div className="text-lg  flex items-center mt-3">
                <AiOutlineCreditCard className="cursor-pointer" />
                <p className="text-sky-400 ml-1 cursor-pointer">
                  Conocé las promociones
                </p>
              </div>

              <div>
                <p className="text-red-600 mt-2">
                  O en hasta 3 cuotas sin interés de $5.000
                </p>
              </div>

              <hr />
              <div className="">
                <p className=" font-semibold text-1xl">Talla</p>
                <div className="flex  ">
                  <select className="mt-2">
                    {product.sizes.map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <hr />
              <div className="flex justify-center items-center">
                <button
                  href="#"
                  className="p-3 mt-3 mb-2 text-white w-96 bg-red-600  rounded-full"
                >
                  Add on Cart
                </button>
                <BsHeart className="ml-3 cursor-pointer" />
              </div>
            </div>

            <div className=" w-full  mx-5 my-28  flex ">
              <div className="flex justify-evenly ">
                <h3 className="text-2xl">Description</h3>
                <p className="text-lg w-2/4">
                  Add more and more kilometers with your Nike Revolution 6 Next
                  Nature Shoes, which provide cushioning and comfort with every
                  step you take. Its breathable upper and outsole computer
                  designed for better traction are ideal for even the most
                  demanding runners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-36 justify-center my- mx-44 px-36 items-center   columns-2  ">
        <p className="mb-1">
          <span className="font-bold">Gender:</span>
          Men
        </p>
        <p className="mb-1">
          <span className="font-bold">Suitable for:</span>
          Running
        </p>
        <p className="mb-1">
          <span className="font-bold">Material:</span>
          Mesh
        </p>
        <p className="mb-1">
          <span className="font-bold">Benefits:</span>
          Cushioning
        </p>
        <p className="mb-1">
          <span className="font-bold">Cane:</span>
          Low
        </p>
        <p className="mb-1">
          <span className="font-bold">Fit:</span>
          Lace-up
        </p>
        <p className="w-2/4 mb-1">
          <span className="font-bold">Important:</span>
          The weight of the footwear may vary according to the requested number.
          The sizes correspond to the numbering of Argentina
        </p>
        <p className="mb-1">
          <span className="font-bold">Warranty:</span>
          Against manufacturing defect
        </p>
        <p className="mb-1">
          <span className="font-bold">Origin:</span>
          Imported
        </p>
        <p className="mb-1">
          <span className="font-bold">Brand:</span>
          Nike
        </p>
      </div>

      <footer className=" mt-20 flex w-full items-center justify-center  ">
        <div className="items-center justify-center p-5">
          <p className="items-center justify-center">
            Copyright © 1999-2022 Your Nikes
          </p>
          <p className="items-center justify-center">
            Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductID;
