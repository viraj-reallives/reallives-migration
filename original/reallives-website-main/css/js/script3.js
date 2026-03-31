const slidesData = [
  {
    img: "image/homescreen-img/homeimage_01.jpg",
    text: "Life doesn’t always give you equal opportunities"
  },
  {
    img: "image/homescreen-img/homeimage_02.jpg",
    text: "Jump into a life face whatever comes your way"
  },
  {
    img: "image/homescreen-img/homeimage_04.jpg",
    text: "Live a life in a different country Face what comes your way"
  },
  {
    img: "image/homescreen-img/homeimage_05.jpg",
    text: "You are the world"
  },
  {
    img: "image/homescreen-img/homeimage_06.jpg",
    text: "Experience life with interactive role-play"
  },
  {
    img: "image/homescreen-img/homeimage_07.jpg",
    text: "Live a character, the one who does not have control on starting position in life"
  },
  {
    img: "image/homescreen-img/homeimage_08.jpg",
    text: "Experience how even the most fortunate are trapped by circumstances"
  },
  {
    img: "image/homescreen-img/homeimage_09.jpg",
    text: "Enjoy the randomness of being born in any country and any culture"
  },
  {
    img: "image/homescreen-img/homeimage_10.jpg",
    text: "Design any character that you wish to be"
  },
  {
    img: "image/homescreen-img/homeimage_11.jpg",
    text: "Guide your character through a life of tribulations, events & choices"
  },
  {
    img: "image/homescreen-img/homeimage_12.jpg",
    text: "Life rarely begins with equal opportunities"
  },
  {
    img: "image/homescreen-img/homeimage_13.jpg",
    text: "Take a chance on living a random life on earth"
  },
  {
    img: "image/homescreen-img/homeimage_14.jpg",
    text: "Experience and live the life of an ordinary person!"
  },
  {
    img: "image/homescreen-img/homeimage_15.jpg",
    text: "Live and experience a trillion human life stories"
  },
  {
    img: "image/homescreen-img/homeimage_16.jpg",
    text: "In the real world not everything is possible for every one"
  },
  {
    img: "image/homescreen-img/homeimage_17.jpg",
    text: "An eye opener on how life is lived in various cultures"
  },
  {
    img: "image/homescreen-img/homeimage_18.jpg",
    text: "One’s abilities and choices are contingent upon one’s context"
  },
  {
    img: "image/homescreen-img/homeimage_19.jpg",
    text: "Surprisingly informative and enlightening"
  },
  {
    img: "image/homescreen-img/homeimage_20.jpg",
    text: "Informative time-sink"
  },
  {
    img: "image/homescreen-img/homeimage_21.jpg",
    text: "Experience how the millions of unfortunate are trapped by circumstances"
  },
  {
    img: "image/homescreen-img/homeimage_22.jpg",
    text: "Best way to learn about life in other countries short of going there!"
  },
  {
    img: "image/homescreen-img/homeimage_23.jpg",
    text: "Some one at some point has probably led a life similar to the one you are playing"
  },

  {
    img: "image/homescreen-img/homeimage_24.jpg",
    text: "Face factors beyond your control"
  },


];

const slider = document.getElementById("slider");

slidesData.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("slide");
  if (index === 0) div.classList.add("active");
  div.innerHTML = `
    <img src="${item.img}" alt="">
    <h2 style="">${item.text}</h2>
  `;
  slider.appendChild(div);
});

// ✅ Step 3: Slideshow logic

let slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextSlide, 4000); // change every 3s


// typing writer text animation js

const el = document.getElementById("robotText");
const texts = ["Critical Thinking", "Global Awareness", "Student Engagement", "Cultural Empathy", "Real-World Learning"];
let textIndex = 0, charIndex = 0;
const typingSpeed = 100, pauseTime = 1500;

function type() {
  if (charIndex < texts[textIndex].length) {
    el.textContent += texts[textIndex][charIndex++];
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, pauseTime);
  }
}

function erase() {
  if (charIndex > 0) {
    el.textContent = texts[textIndex].substring(0, --charIndex);
    setTimeout(erase, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

type();

const el2 = document.getElementById("robotText2");
const texts2 = ["Sustainable Development Goals", "Interdisciplinary Learning", "Experiential Learning", "Global Systems Thinking", "21st Century Skills"];
let textIndex2 = 0, charIndex2 = 0;
const typingSpeed2 = 100, pauseTime2 = 1500;

function type2() {
  if (charIndex2 < texts2[textIndex2].length) {
    el2.textContent += texts2[textIndex2][charIndex2++];
    setTimeout(type2, typingSpeed2);
  } else {
    setTimeout(erase2, pauseTime2);
  }
}

function erase2() {
  if (charIndex2 > 0) {
    el2.textContent = texts2[textIndex2].substring(0, --charIndex2);
    setTimeout(erase2, typingSpeed2 / 2);
  } else {
    textIndex2 = (textIndex2 + 1) % texts2.length;
    setTimeout(type2, typingSpeed2);
  }
}

type2();

const el3 = document.getElementById("robotText3"); // new element
const texts3 = [
  "Family Learning",
  "Character Building",
  "Decision Making Skills",
  "Life Skills Development",
  "Cultural Sensitivity"
];
let textIndex3 = 0, charIndex3 = 0;
const typingSpeed3 = 100, pauseTime3 = 1500;

function type3() {
  if (charIndex3 < texts3[textIndex3].length) {
    el3.textContent += texts3[textIndex3][charIndex3++];
    setTimeout(type3, typingSpeed3);
  } else {
    setTimeout(erase3, pauseTime3);
  }
}

function erase3() {
  if (charIndex3 > 0) {
    el3.textContent = texts3[textIndex3].substring(0, --charIndex3);
    setTimeout(erase3, typingSpeed3 / 2);
  } else {
    textIndex3 = (textIndex3 + 1) % texts3.length;
    setTimeout(type3, typingSpeed3);
  }
}

// Start third text writer
type3();



// landing page js about contact 

const el4 = document.getElementById("robotText4"); // new element
const texts4 = [
  "Global Adventure",
  "Immersive Gameplay",
  "Strategy & Luck",
  "Random Life Simulation",
  "Endless Replayability"
];
let textIndex4 = 0, charIndex4 = 0;
const typingSpeed4 = 100, pauseTime4 = 1500;

function type4() {
  if (charIndex4 < texts4[textIndex4].length) {
    el4.textContent += texts4[textIndex4][charIndex4++];
    setTimeout(type4, typingSpeed4);
  } else {
    setTimeout(erase4, pauseTime4);
  }
}

function erase4() {
  if (charIndex4 > 0) {
    el4.textContent = texts4[textIndex4].substring(0, --charIndex4);
    setTimeout(erase4, typingSpeed4 / 2);
  } else {
    textIndex4 = (textIndex4 + 1) % texts4.length;
    setTimeout(type4, typingSpeed4);
  }
}

// Start fourth text writer

type4();

// landing page js about contact


// typing writer text animation js


// mobile slider js 

// Your second slider (mobile)
const sliderMobile = document.getElementById("homeSlider");

const slidesDataMobile = [
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 5.png", text: "Life doesn’t always give you equal opportunities" },
  // { img: "image/mobilehomescreen/iPhone 16 Pro Max - 21.png", text: "Jump into a life face whatever comes your way" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 22.png", text: "Jump into a life face whatever comes your way" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 23.png", text: "Live a life in a different country Face what comes your way" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 24.png", text: "You are the world" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 25.png", text: "Experience life with interactive role-play" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 26.png", text: "Live a character, the one who does not have control on starting position in life" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 27.png", text: "Enjoy the randomness of being born in any country and any culture" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 28.png", text: "Design any character that you wish to be" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 29.png", text: "Life rarely begins with equal opportunities" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 30.png", text: "Take a chance on living a random life on earth" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 31.png", text: "Experience and live the life of an ordinary person!" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 32.png", text: "Live and experience a trillion human life stories" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 33.png", text: "In the real world not everything is possible for every one" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 34.png", text: "An eye opener on how life is lived in various cultures" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 35.png", text: "One’s abilities and choices are contingent upon one’s context" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 36.png", text: "Surprisingly informative and enlightening" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 37.png", text: "Informative time-sink" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 38.png", text: "Experience how the millions of unfortunate are trapped by circumstances" },
  { img: "image/mobilehomescreen/iPhone 16 Pro Max - 39.png", text: "Some one at some point has probably led a life similar to the one you are playing" },




];

// Create slides
slidesDataMobile.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("slideMobile");
  if (index === 0) div.classList.add("activeMobile");

  div.innerHTML = `
    <img src="${item.img}" alt="">
    <h2>${item.text}</h2>
  `;

  sliderMobile.appendChild(div);
});

// Slider logic
let slidesMobile = sliderMobile.querySelectorAll(".slideMobile");
let currentMobile = 0;

function showNextSlideMobile() {
  slidesMobile[currentMobile].classList.remove("activeMobile");
  currentMobile = (currentMobile + 1) % slidesMobile.length;
  slidesMobile[currentMobile].classList.add("activeMobile");
}

setInterval(showNextSlideMobile, 3000);


// mobile slider js 