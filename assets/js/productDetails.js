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
  const productDetails = await getProductsDetails();
  //console.log(productDetails);
  document.querySelector(".title").innerHTML = "Details page for " + productDetails.title;

  const displayresult = `<div class='product'>
    <img src="${productDetails.thumbnail}"  alt="${productDetails.thumbnail}" /> 
        <h2> ${productDetails.title}</h2>
<span> ${productDetails.price}</span>
      </div>`;
      //console.log(displayresult);
      document.querySelector(".productDetails .row").innerHTML = displayresult;
      //console.log(document.querySelector(".productDetails"));

};

displayProductDetails();
