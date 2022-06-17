// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const allProductsMock = require('./all-products.js')

export default async function  handler(req, res) {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(allProductsMock);
    }, 5000);
  });


  return res.status(200).json({ data: result.default })
}
