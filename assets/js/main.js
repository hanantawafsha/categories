// function to retrieve categories
const getCategories = async () => {
  const { data } = await axios.get('https://dummyjson.com/products/category-list');
  return data;
};

// function to display categories
const displayCategories = async () => {

  const categories = await getCategories();

 const categoryResults = categories.map((category) => {
      return `<div class='category'>
      <a href='categoryDetails.html?category=${category}' target='_blank'> ${category} <a/> 
        </div>`;
    }).join(' ');
  document.querySelector(" .categories .row").innerHTML = categoryResults;
  //console.log(categoryResults[0]);
};

// call the function to display categories

displayCategories();
// function to retrieve categories

const getProducts = async () => {
  const { data } = await axios.get('https://dummyjson.com/products');
  return data;
};

// function to display product categories

const displayProducts = async () => {
  const data = await getProducts();
console.log(data);

  const productResults = data.products.map((product) => {

    return `<div class='product'>
    <img src="${product.thumbnail}"  alt="${product.thumbnail}" /> 

        <h2> ${product.title}</h2>
<span> ${product.price}</span>
      </div>`;
  }).join(' ');
  document.querySelector(" .products .row").innerHTML = productResults;
};

// call the function to display products
displayProducts();
// function to retrieve products by category

