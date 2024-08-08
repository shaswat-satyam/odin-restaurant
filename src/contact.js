let data = [
  { name: "Mama Bear", email: "MamaBear@gmail.com", phone: "123456789" },
  { name: "Mama Bear", email: "MamaBear@gmail.com", phone: "123456789" },
  { name: "Mama Bear", email: "MamaBear@gmail.com", phone: "123456789" },
];

function contactDiv(person) {
  let div = document.createElement("div");
  let name = document.createElement("h2");
  name.innerText = person.name;
  let email = document.createElement("p");
  email.innerText = person.email;
  let phone = document.createElement("p");
  phone.innerText = person.phone;
  div.appendChild(name);
  div.appendChild(email);
  div.appendChild(phone);
  return div;
}
export default function contact() {
  let contents = document.getElementById("content");
  contents.innerHTML = "";
  data.forEach((person) => contents.appendChild(contactDiv(person)));
}
