const mock = {
  id: 1,
  name: 'T-shirt',
  price: '$10',
  size: 'small',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nisi. Nullam euismod, nisi eu consectetur euismod, nisi nisi euismod nisi, euismod nisi nisi euismod nisi.',
  stock: 44,
}

const allProducts = Array(25).fill(null).map((_, i) => ({
  id: i,
  ...mock,
}));

export default allProducts
