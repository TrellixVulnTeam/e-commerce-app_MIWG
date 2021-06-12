const imageToBase64 = require('image-to-base64');
const { v4: uuidv4 } = require('uuid');
let IMAGE;

imageToBase64('./assets/t-shirt.png')
  .then((response: string) => {
    productItems[0].image = response;
  })
  .catch((error: ErrorEvent) => {
    console.log(error);
  });

export const productItems = [
  {
    id: uuidv4(),
    category: 'Shirt',
    name: 'Blank T-Shirt',
    price: '5.59$',
    image: '',
    availability: 'In Stock',
    colors: ['yellow', 'red', 'blue'],
    numReviews: 6,
    description: 'lorem ipsum',
  },
  {
    id: uuidv4(),
    category: 'Shirt',
    name: 'Blank T-Shirt',
    price: '5.59$',
    image: '',
    availability: 'In Stock',
    colors: ['yellow', 'red', 'blue'],
    numReviews: 6,
    description: 'lorem ipsum',
  },
  {
    id: uuidv4(),
    category: 'Shirt',
    name: 'Blank T-Shirt',
    price: '5.59$',
    image: '',
    availability: 'In Stock',
    colors: ['yellow', 'red', 'blue'],
    numReviews: 6,
    description: 'lorem ipsum',
  },
  {
    id: uuidv4(),
    category: 'Shirt',
    name: 'Blank T-Shirt',
    price: '5.59$',
    image: '',
    availability: 'In Stock',
    colors: ['yellow', 'red', 'blue'],
    numReviews: 6,
    description: 'lorem ipsum',
  },
  {
    id: uuidv4(),
    category: 'Shirt',
    name: 'Blank T-Shirt',
    price: '5.59$',
    image: '',
    availability: 'In Stock',
    colors: ['yellow', 'red', 'blue'],
    numReviews: 6,
    description: 'lorem ipsum',
  },
];

module.exports = {
  productItems,
};
