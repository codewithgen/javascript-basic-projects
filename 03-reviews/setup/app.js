// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Lola Trio',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm ready to give my wallet away",
  },
  {
    id: 2,
    name: 'Annita Carter',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'The hell with this, dont your waste money',
  },
  {
    id: 3,
    name: 'Michol Wool',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Im unsure but will give it a try',
  },
  {
    id: 4,
    name: 'Trina Lenna',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'This is so cool',
  },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');



// set starting item

let currentItem = 0;

//  load initial item
window.addEventListener('DOMContentLoaded', function() {
  showPerson();
});

// show person based on item

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//  show next person 

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
})

//  show prev person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

//  show random person
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log()
  showPerson();
});
