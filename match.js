const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

const products = [
    { name: 'laptop', price: 1000 },      
    { name: 'desktop', price: 1500 },
    { name: 'phone', price: 500 },
    { name: 'tablet', price: 300 },
    { name: 'watch', price: 200 }
];

// for (const product of products) {
//   console.log(product);
// }

function matchproducts(products, search) {
    const match =[]
  for (const product of products) {
    if (product.name.toLowercase().includes(search.toLowercase())) {
      match.push(product);
    }
    return match;
  }

const result = matchproducts(products, 'phone');
console.log(result);

}