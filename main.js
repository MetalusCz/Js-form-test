
let productsList = [];



function addProduct() {
  let productName = document.getElementById("product-name").value;
  let productQuantity = document.getElementById("product-quantity").value;

  if (productName && productQuantity) {
    let product = {
      name: productName,
      quantity: parseInt(productQuantity),
    };

    productsList.push(product);
    updateProductsList();
    updateTotalPrice();
  }
}

function updateProductsList() {
  let productsLabel = document.getElementById("products");
  let productsText = "Shop cart: ";

  for (let i = 0; i < productsList.length; i++) {
    productsText += productsList[i].name + " x " + productsList[i].quantity;

    if (i !== productsList.length - 1) {
      productsText += ", ";
    }
  }

  productsLabel.textContent = productsText;
}

function updateTotalPrice() {
  let totalPriceLabel = document.getElementById("product-price");
  let totalPrice = 0;

  for (let i = 0; i < productsList.length; i++) {
    totalPrice +=
      productsList[i].quantity *
      parseFloat(document.getElementsByName("price")[0].value);
  }

  totalPriceLabel.textContent =
    "Total Price: " + totalPrice.toFixed(2) + " CZK";
}

      // const form = document.querySelector('form');
      // const nameInput = document.querySelector('#firstName');
      // const emailInput = document.querySelector('#email');

      // form.addEventListener('submit', (event) => {
      //   if (!nameInput.checkValidity()) {
      //     alert('Please enter your name.');
      //     event.preventDefault();
      //   }

      //   if (!emailInput.checkValidity()) {
      //     alert('Please enter a valid email address.');
      //     event.preventDefault();
      //   }
      // });

let euro = 23.85;
let dolar = 22.38;
let juan = 3.25;
let forint = 0.06;

function showRecap() {
  //preventDefault();
  let firstName = document.getElementsByName("FirstName")[0].value;
  let lastName = document.getElementsByName("LastName")[0].value;
  let email = document.getElementsByName("Email")[0].value;
  let gender = document.getElementsByName("gender");
  let selectedGender;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
    }
  }
  let country = document.getElementById("country").value;
  let totalPrice = 0;
  let productsText = "";
  for (let i = 0; i < productsList.length; i++) {
    let productPrice = parseFloat(document.getElementsByName("price")[0].value);
    totalPrice += productsList[i].quantity * productPrice;
    productsText += `<tr>
                          <td>Product name: ${productsList[i].name}</td>
                          <td>quantity: ${productsList[i].quantity}</td>
                          <td>price: ${productPrice.toFixed(2)}</td>
                        </tr>
                        </br>`;
  }
 
  let recapText = `
      <html>
        <head>
          <title>Order Recapitulation</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@200;300;400;500;600&display=swap');
            *{
              margin: 0px;
              padding: 0px;
            }
            body {
              background-image: url(https://images.unsplash.com/photo-1625490939776-17cef70ec079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80);
              background-size: cover;
              background-attachment: fixed;
            }
            table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              padding: 5px;
            }
            .container{               
              margin-top: 80px;
              box-shadow: -1px 1px 60px 10px rgb(5, 5, 5);
              background: rgba(0, 0, 0, 0.75);
              text-align: center;        
              color: #fff;
              font-family: 'Poppins', sans-serif;
            }
          </style>
        </head>
        <body>
        <div class="container">
          <h1>Order Recapitulation</h1>
          <p>Name: ${firstName} ${lastName}</p>
          <p>Email: ${email}</p>
          <p>Gender: ${selectedGender}</p>
          <p>Country: ${country}</p>        
          <p>${productsText}</p>
          <p>Total Price: ${totalPrice.toFixed(2)} CZK</p>
          <p>DPH 21% is: ${(totalPrice - (totalPrice/1.21)).toFixed(2)} CZK</p>
          <p>Another currency: ${(totalPrice / euro).toFixed(2)} EUR ${(
              totalPrice / dolar
              ).toFixed(2)} USD ${(totalPrice / juan).toFixed(2)} CNY ${(
              totalPrice / forint
              ).toFixed(2)} HUF</p>         
          </div>
        </body>
      </html>
    `;
    
  const recapPage = window.open("", "_blank");
  recapPage.document.write(recapText);
  recapPage.document.close();
}
