// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import allProductsMock from '../all-products-mock.js'

export default async function  handler(req, res) {
  const { id } = req.query;

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(allProductsMock);
    }, 5000);
  });

  const foundProduct = result.find(product => product.id === Number(id));

  if (foundProduct) {
    return res.status(200).json({ data: foundProduct })
  }

  return res.status(404).json({ message: "Product not found", status: 404 })
}
