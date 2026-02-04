// const products = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 799,
//     stock: 25,
//     brand: "Logitech"
//   },
//   {
//     id: 2,
//     name: "Bluetooth Headphones",
//     category: "Electronics",
//     price: 2499,
//     stock: 15,
//     brand: "Boat"
//   },
//   {
//     id: 3,
//     name: "Running Shoes",
//     category: "Footwear",
//     price: 2999,
//     stock: 10,
//     brand: "Nike"
//   },
//   {
//     id: 4,
//     name: "Smart Watch",
//     category: "Wearables",
//     price: 1999,
//     stock: 18,
//     brand: "Noise"
//   },
//   {
//     id: 5,
//     name: "Backpack",
//     category: "Accessories",
//     price: 1299,
//     stock: 30,
//     brand: "American Tourister"
//   }
// ];

let products;

let root = document.getElementById("root");
fetch("https://fakestoreapi.com/products")
  .then((comments) => {
    return comments.json();
  })
  .then((data) => {
    products = data;
    displayProducts(data);
  });

let searchResult = document.getElementById("search-result");
let searchBar = document.getElementById("search-bar");
function search() {


  console.log(searchResult.hasChildNodes());
  
  while (searchResult.hasChildNodes()) {
    searchResult.removeChild(searchResult.firstChild);
  }

  let text = searchBar.value.toLowerCase();

  let arr = products.filter((filterItems) => {
    return filterItems.title.toLowerCase().startsWith(text);
  });

  console.log(arr);

  for (let i = 0; i < 5; i++) {
    let filteredItems = document.createElement("p");

    filteredItems.innerText = arr[i].title;
    searchResult.append(filteredItems);


    filteredItems.className="p-5"
  }
}

function displayProducts(data) {
  for (let i = 0; i < data.length; i++) {
    let post = document.createElement("div");
    let name = document.createElement("h2");
    let price = document.createElement("h3");
    let rating = document.createElement("p");
    let img = document.createElement("img");
    let ratingBar = document.createElement("div");
    let ratingClr = document.createElement("div");

    name.innerText = data[i].title;
    price.innerText = data[i].price;
    img.src = data[i].image;
    rating.innerText = data[i].rating.rate;

    post.append(name);
    post.append(price);
    post.append(img);
    root.append(post);
    post.append(rating);
    ratingBar.append(ratingClr);
    post.append(ratingBar);

    post.id = "card";
    img.className = "images";
    ratingBar.className = "rating-bar";
    ratingClr.className = "ratingsClr";

    let percentage = (data[i].rating.rate / 5) * 100;
    ratingClr.style.width = percentage + "%";
  }
}
