
const limit = parseInt(30);

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

const getProducts = async (page) => {
 // console.log(page);
  const skip = parseInt((page - 1) * limit);
 // console.log(skip);
  const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return data;
};

// function to display product categories

const displayProducts = async (page = 1) => {
  const data = await getProducts(page);
  //console.log(data);
  const nbrOfPages= Math.ceil(data.total/limit);
 // console.log(nbrOfPages);
 

//console.log(data);

  const productResults = data.products.map((product) => {

    return `<div class='product'>
    <img src="${product.thumbnail}"  alt="${product.thumbnail}" /> 

        <h2> ${product.title}</h2>
<span> ${product.price}</span>
      </div>`;
  }).join(' ');
  document.querySelector(" .products .row").innerHTML = productResults;

  //display pagination section
  let paginationlinks =``;
  if (page ==1  ){
     paginationlinks += `<li class="page-item"><button class="page-link">&laquo;</button></li>`;

  }
else {
  paginationlinks += `<li class="page-item"><button class="page-link"  onclick=displayProducts('${parseInt(page)-1}')>&laquo;</button></li>`;

}
for(let i=1; i<=nbrOfPages; i++){
  paginationlinks += `<li class="page-item ${i==page?'active':''}"><button class="page-link" onclick=displayProducts('${i}')>${i}</button></li>`;
  }
  if (page == nbrOfPages){
    paginationlinks += `<li class="page-item"><button class="page-link" >&raquo;</button></li>`;
  }
  else {
    paginationlinks += `<li class="page-item"><button class="page-link" onclick=displayProducts('${parseInt(page)+1}')>&raquo;</button></li>`;
  }
//console.log(paginationlinks);

document.querySelector(".pagination").innerHTML = paginationlinks;
};


// call the function to display products

displayProducts();

