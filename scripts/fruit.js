// Load JSON data and do stuff
const url = "./data/fruit.json";

const displayFruits = (fruits) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  fruits.forEach((fruityvice) => {
    // Create elements to add to the div.cards element
    // let card = document.createElement("section");
    // card.innerHTML = `
    // <p>${fruityvice.name}</p>
    // `;
    let fruitName = document.getElementById("fruit-name");
    fruitName.innerHTML = `${fruityvice.name}`;
    cards.appendChild(fruitName);
  }); // end of forEach loop
  
}; // end of function expression



async function getFruitData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayFruits(data.fruits);
    // displayBusinessesList(data.members);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getFruitData();
