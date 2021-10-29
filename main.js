//=======================
const selected = document.querySelector(".selected");
const optionContainer = document.querySelector(".options-container");

const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionContainer.classList.toggle("lang-active");
  //console.log("clicled");
});

let setV = null;

optionList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionContainer.classList.remove("lang-active");
    setV = o.querySelector("input").id;
    console.log(setV);
    setLanguage(setV);
  });
});

//=======================
let sinhala = {
  "lang-home": "ගෙදර",
  "lang-about": "අපි ගැන",
  "lang-services": "සේවා",
  "lang-testimonials": "පරිශීලක අදහස්",
  "lang-portforlio": "අපේ වැඩ ",
  "lang-contacts": "සම්බන්ධ වන්න",
  "lang-hero-one": "සාදරයෙන් පිළිගනිමු",
  "lang-hero-two": "ඔබගේ ආයතන නාමය",
  "lang-grid-head": "අපගේ අයිතමයන් මෙතනින්",
};

let english = {
  "lang-home": "HOME",
  "lang-about": "ABOUT",
  "lang-services": "SERVICES",
  "lang-testimonials": "TESTIMONIALS",
  "lang-portforlio": "PORTFOLIO",
  "lang-contacts": "CONTACTS",
  "lang-hero-one": "WELCOME TO",
  "lang-hero-two": "YOUR COMPANY NAME",
  "lang-grid-head": "OUR ITEMS ARE HERE",
};

//let englishbtn = document.getElementById("en-btn");
//let sinhalabtn = document.getElementById("sin-btn");

let ids = document.querySelectorAll('*[id^="lang-"]');

// let selectElement = document.querySelector("#language-selector");
// console.log(selectElement);
//console.log(selectElement.value);

// sinhalabtn.onclick = () => {
//   setLanguage("sinhala");
// };

// englishbtn.onclick = () => {
//   setLanguage("english");
//   console.log("gear");
// };

setLanguage = (lang) => {
  if (lang == "sinhala") {
    ids.forEach((item) => {
      //console.log(item.id);

      Object.keys(sinhala).forEach((mykey) => {
        //console.log(mykey);
        if (mykey == item.id) {
          item.innerHTML = sinhala[mykey];
        }
      });
    });
  } else if (lang == "english") {
    ids.forEach((item) => {
      //console.log(item.id);

      Object.keys(english).forEach((mykey) => {
        //console.log(mykey);
        if (mykey == item.id) {
          item.innerHTML = english[mykey];
        }
      });
    });
  } else {
    //Code Here
  }
};
