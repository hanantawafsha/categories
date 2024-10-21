const parameters = new URLSearchParams(window.location.search);
const productID = parameters.get("productID");

//console.log(productID);

// function to retrieve product by id

const getProductsDetails = async () => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/${productID}`
  );
   console.log(data);

  return data;
};

// function to diaply productdetails by id

const displayProductDetails = async () => {
  const loader = document.querySelector(".loader-container");
  console.log(loader);
  // to add loader container
  loader.classList.add("active");
  try {
    const productDetails = await getProductsDetails();
    console.log(productDetails);
    document.querySelector(".title").innerHTML =
      "Details page for " + productDetails.title;

    const displayresult = `<div class='product'>
      <img src="${productDetails.thumbnail}"  alt="${productDetails.thumbnail}" /> 
          <h2> ${productDetails.title}</h2>
          <h3> Brand Name: ${productDetails.brand}</h3>
          <h3>  Product category: ${productDetails.category}</h3>
          <p>${productDetails.description}</p>
          
  <span> ${productDetails.price} $</span>
        </div>`;
    //console.log(displayresult);
    document.querySelector(".productDetails .row").innerHTML = displayresult;
    //console.log(document.querySelector(".productDetails"));
  } catch (error) {
    // console.error("Error in fetching data", error);
    document.querySelector(".productDetails .row").innerHTML =
      "Error fetching product details";
  } finally {
    // to remove loader container
    loader.classList.remove("active");
  }
};

displayProductDetails();
