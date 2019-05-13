const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

const newImage = document.querySelector("#cta-img");

newImage.src = "img/header-img.png";

const navArray = document.querySelectorAll("a");

navArray[0].textContent = "Services";
navArray[1].textContent = "Product";
navArray[2].textContent = "Vision";
navArray[3].textContent = "Features";
navArray[4].textContent = "About";
navArray[5].textContent = "Contact";

const newNav1 = document.createElement("a");
newNav1.textContent = "FAQ";

document.querySelector(".container nav").appendChild(newNav1);

const newNav2 = document.createElement("a");
newNav2.textContent = "Hello";

document.querySelector(".container nav").prepend(newNav2);

const newNavArray = document.querySelectorAll("a");

newNavArray.forEach(newColor => (newColor.style.color = "green"));

document.querySelector(".cta .cta-text h1").textContent = "Dom Is Awesome";
document.querySelector(".cta .cta-text button").textContent = "Get Started";

const topArr = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
);

topArr[0].textContent = "Features";
topArr[1].textContent = "About";

const topArrP = document.querySelectorAll(
  ".main-content .top-content .text-content p"
);

topArrP[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topArrP[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottArrH = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
);

bottArrH[0].textContent = "Services";
bottArrH[1].textContent = "Product";
bottArrH[2].textContent = "Vision";

const bottArrP = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
);

bottArrP[0].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottArrP[1].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottArrP[2].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImage = document.querySelector(".middle-img");

middleImage.src = "img/mid-page-accent.jpg";

document.querySelector(".contact h4").textContent = "Contact";

const contactArr = document.querySelectorAll(".contact p");

contactArr[0].textContent = "123 Way 456 Street Somewhere, USA";
contactArr[1].textContent = "1 (888) 888-8888";
contactArr[2].textContent = "sales@greatidea.io";

document.querySelector("footer p").textContent = "Copyright Great Idea! 2018";

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
