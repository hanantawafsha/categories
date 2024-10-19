
const parameters = new URLSearchParams(window.location.search);
    const categoryName = parameters.get('category');

    // function to retrieve product by categories

const getProductsByCategory = async () => {
    
    const { data } = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
    //console.log(data);
    
    return data;
  };
      // function to display product by categories

  const displayProductsByCategory = async () => {
      const data = await getProductsByCategory();

     const header = ` <h2>${categoryName} Details </h2> <br> <br>`;
     console.log(header);
     document.querySelector(".categoryDetails .header").innerHTML += header;
      console.log(data);
     
      const productDetails = data.products.map((product) => {
      return `<div class='categoryProducts'>
        <img src="${product.thumbnail}"  alt="${product.thumbnail}" /> 
            <h2> ${product.title}</h2>
    <span> ${product.price}</span>
     <a href='productDetails.html?productID=${product.id}' target='_blank'> Details <a/> 

          </div>`;
      }).join(' ');
      //console.log(result);
      console.log(productDetails);
     //console.log(document.querySelector(".categoryDetails .row").innerHTML);
      document.querySelector(".categoryDetails .row").innerHTML = productDetails;
    };
  displayProductsByCategory();


  
