const reviews = [
  {
    id: 1,
    name: "John the Don",
    img: "face-1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "face-2.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "face-3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "face-4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("my-img");
const author = document.getElementById("name");
const job = document.getElementById("position");
const info = document.getElementById("information");

const prevBtn = document.getElementById("left-nav");
const nextBtn = document.getElementById("right-nav");
const randomBtn = document.querySelector("#sur");

let currentitem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentitem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentitem++;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  showPerson(currentitem);
});

prevBtn.addEventListener("click", function () {
  currentitem--;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  showPerson(currentitem);
});

randomBtn.addEventListener("click", function () {
  currentitem = Math.floor(Math.random() * reviews.length);
  showPerson(currentitem);
});
