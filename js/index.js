const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav
let nav = document.querySelectorAll('nav a');
let navBar = document.querySelector("nav");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

// cta
let ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// main content
let contentHeadings = document.querySelectorAll(".text-content > h4");
contentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
contentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
contentHeadings[2].textContent = siteContent["main-content"]["services-h4"];
contentHeadings[3].textContent = siteContent["main-content"]["product-h4"];
contentHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

let textContent = document.querySelectorAll(".text-content > p");
textContent[0].textContent = siteContent["main-content"]["features-content"];
textContent[1].textContent = siteContent["main-content"]["about-content"];
textContent[2].textContent = siteContent["main-content"]["services-content"];
textContent[3].textContent = siteContent["main-content"]["product-content"];
textContent[4].textContent = siteContent["main-content"]["vision-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact section
let contactHeading = document.querySelector(".contact > h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll(".contact > p");

contactText[0].textContent = siteContent["contact"]["address"];
// add line break in address text
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

// footer
let footerText = document.querySelector("footer > p");
footerText.textContent = siteContent["footer"]["copyright"];

//adjustments part 3: add new content

let navLinksArr = Array.from(nav);

// for(let i = 0; i < navLinksArr.length; i++) {
//   navLinksArr[i].style.color = "green";
// }

navLinksArr.forEach((elem) => {elem.style.color = "green";});

const newAppendLink = document.createElement("a");

navBar.appendChild(newAppendLink);
nav = document.querySelectorAll("nav > a");
nav[6].textContent = "Balalal";
nav[6].href = "#";

navBar.prepend(document.createElement("a"));
nav = document.querySelectorAll("nav > a");
nav[0].textContent = "Balalalal";
nav[0].href = "#";


//banner changing buttons => my stretch goal

const btns = {
  btnText: ["Cat", "Dog", "Rabbit", "Balloon"],
  btnImgSrc: ["../img/cat.png", "../img/dog.png", "../img/rabbit.png", "../img/balloon.png"],
  makeButton: function(elem) {
    const button = document.createElement("button");
    button.textContent = this.btnText[this.btnText.indexOf(elem)]; 
    //redundancy for the sake of itself, lol ^
    button.addEventListener("click", (e) => {
      this.img.src = this.btnImgSrc[this.btnText.indexOf(elem)];
    })
    return button;
  },
  img: document.querySelector("#cta-img")
}

const firstBtn = document.querySelector(".cta-text > button");
firstBtn.addEventListener("click", (e) => {
  btns.img.src = "../img/header-img.png";
});
// ../img/header-img.png
// function makeButton(text) {
//   const button = document.createElement("button");
//   button.textContent = text;
//   return button;
// }

btns.btnText.forEach( (elem) => {
  document.querySelector("div.cta-text").append(btns.makeButton(elem));
});

// Fixing Address Text

const addressPtext = document.querySelector(".contact > p").textContent;

const pArr = [];

addressPtext.split(" ").forEach( (elem) => {
  pArr.push(elem);
  if(elem === "456") {
    pArr.push("<br>");
  }
});;

document.querySelector(".contact > p").innerHTML = pArr.join(" ");