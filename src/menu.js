let menuItems = [
  {
    type: "Beverage",
    items: [
      {
        name: "CocaCola",
        desc: "A cold, sugary drink which can eat away your teeths",
        price: 45,
      },
      {
        name: "Thumbs Up",
        desc: "A cold, sugary drink which can eat away your teeths",
        price: 40,
      },
    ],
  },
  { type: "Sides", items: [] },
  { type: "Main Dishes", items: [] },
];

function createItemDiv(item) {
  let div = document.createElement("div");
  let heading = document.createElement("h3");
  heading.innerText = item.name;
  let desc = document.createElement("p");
  desc.innerText = item.desc;
  let price = document.createElement("b");
  price.innerText = item.price;

  div.appendChild(heading);
  div.appendChild(desc);
  div.appendChild(price);
  return div;
}

function createSubMenu(subMenu) {
  let div = document.createElement("div");
  let heading = document.createElement("h2");
  heading.innerText = subMenu.type;
  div.appendChild(heading);
  subMenu.items.forEach((item) => {
    let itemDiv = createItemDiv(item);
    div.appendChild(itemDiv);
  });
  return div;
}
export default function menu() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  let heading = document.createElement("h1");
  heading.innerHTML = "Menu";
  content.appendChild(heading);
  let menuDiv = document.createElement("div");
  menuItems.forEach((item) => {
    content.appendChild(createSubMenu(item));
  });
  content.appendChild(menuDiv);
}
