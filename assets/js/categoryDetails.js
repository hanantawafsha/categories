const getProductsByCategory = async () => {
    const parameters = new URLSearchParams(window.location.search);
    const categoryName = parameters.get('category');
    const { data } = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
    return data;
  };
  
  const displayProductsByCategory = async () => {
      const data = await getProductsByCategory();
      const productDetails = data.products.map((product) => {

        return `<div class='categoryProducts'>
        <img src="${product.thumbnail}"  alt="${product.thumbnail}" /> 
            <h2> ${product.title}</h2>
    <span> ${product.price}</span>
          </div>`;
      }).join(' ');
      document.querySelector(" .categoryDetails .row").innerHTML = productDetails;
    };
  displayProductsByCategory();


  
