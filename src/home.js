export default function home() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  let heading = document.createElement("h1");
  heading.innerText = "Chippy Chippy chapa chapa";
  content.appendChild(heading);
  let data = document.createElement("div");
  let description = document.createElement("p");
  description.innerText =
    "Chippy's has the best chips available. The atmosphere and customer service make you feel like you are chips. This is the exactly the kind of place that I like to return to again and again";
  data.appendChild(description);
  let author = document.createElement("h2");
  author.innerText = "Sonakshi Sinha";
  data.appendChild(author);
  content.appendChild(data);
  data = document.createElement("div");
  heading = document.createElement("h2");
  heading.innerText = "Hours";
  let timing = document.createElement("p");
  let list = document.createElement("ul");
  [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday:6am - 6pm",
    "Wednesday:6am - 6pm",
    "Thursday:6am - 10pm",
    "Friday:6am - 10pm",
    "Saturday: 6am - 10pm",
  ].forEach((item) => {
    let ListItem = document.createElement("li");
    ListItem.innerText = item;
    list.appendChild(ListItem);
  });
  timing.appendChild(list);
  data.appendChild(timing);
  content.appendChild(data);
  data = document.createElement("div");
  heading = document.createElement("h3");
  heading.innerText = "Location";
  data.appendChild(heading);
  let location = document.createElement("p");
  location.innerText = "123 village, India";
  data.appendChild(location);
  content.appendChild(data);
}
