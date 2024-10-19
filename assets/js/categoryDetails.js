
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
      const loader = document.querySelector(".loader-container");
      // to add loader container
      loader.classList.add("active");

     const header = ` <h2>${categoryName} Details </h2> <br> <br>`;
     console.log(header);
     document.querySelector(".categoryDetails .header").innerHTML += header;
      //console.log(data);
     try{
      const data = await getProductsByCategory();
      const productDetails = data.products.map((product) => {
        return `<div class='categoryProducts'>
          <img src="${product.thumbnail}"  alt="${product.thumbnail}" /> 
              <h2> ${product.title}</h2>
      <span> ${product.price}</span>
  
            </div>`;
        }).join(' ');
        //console.log(result);
        //      <a href='productDetails.html?productID=${product.id}' target='_blank'> Details <a/> 

        console.log(productDetails);
       //console.log(document.querySelector(".categoryDetails .row").innerHTML);
        document.querySelector(".categoryDetails .row").innerHTML = productDetails;
      }
      catch(error){
        console.error('Error:', error);
      }
      finally{
        loader.classList.remove("active");

      }
     };
    
  displayProductsByCategory();


  
