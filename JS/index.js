// JS for index.html

// Color Reference (LESS variables don't function in JS)

// @yellow: #e8e595;
// @yellowTint: #fffca3;
// @yellowShade: #bdba79;

// @blue: #40627c;
// @blueTint: #679ec7;
// @blueShade: #263b4a;

// @grey: #26393d;
// @greyTint: #527c85;
// @greyShade: #080c0d;

// Header logo hover behavior:

const logoBtn = document.querySelector(".logo");
const paletteYellow = document.querySelector(".palette-yellow");
const paletteBlue = document.querySelector(".palette-blue");
logoBtn.addEventListener("mouseover", () => {
  logoBtn.style.backgroundColor = "#e8e595";
  logoBtn.style.color = "#40627c";
  paletteYellow.style.display = "none";
  paletteBlue.style.display = "inline";
});
logoBtn.addEventListener("mouseleave", () => {
  logoBtn.style.backgroundColor = "#40627c";
  logoBtn.style.color = "#e8e595";
  paletteYellow.style.display = "inline";
  paletteBlue.style.display = "none";
});

// Slideshow
// Component: Additional images can easily be added
const slideImgs = Array.from(document.querySelectorAll(".slide-img"));
let slideImgActive = slideImgs[0];
slideImgActive.classList.add("slide-img-active");
const len = slideImgs.length - 1;
let arrayLocation = 0;

const slide = () => {
  slideImgs.forEach(img => img.classList.remove("slide-img-active"));
  if (arrayLocation === len) {
    slideImgActive = slideImgs[0];
    arrayLocation = 0;
  } else {
    slideImgActive = slideImgs[`${arrayLocation + 1}`];
    arrayLocation += 1;
  }
  slideImgActive.classList.add("slide-img-active");
};

const autoSlideshow = setInterval(slide, 2500);

// Features tabs/cards
// Component: additional feature tabs/cards can easily be added

class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    // Matches active card (and active card image) to active tab:
    this.tabData = this.tabElement.dataset.tab;
    this.card = document.querySelector(
      `.feature-card[data-card="${this.tabData}"]`
    );
    this.image = document.querySelector(
      `.feature-image[data-image="${this.tabData}"]`
    );
    // Applies inactive borderBottom style to all tabs:
    //this.tabElement.style.borderBottom = "1px solid #080c0d";
    // Applies "click" event listener to all tabs:
    tabElement.addEventListener("click", () => this.selectTab());
  }
  selectTab() {
    // Tab selection only triggers in widths < @desktop (800px) because at @desktop width, the tabbed cards are not stacked
    if (!window.matchMedia("(min-width: 800px)").matches) {
      // GSAP: Changes all tabs (and thereby the previously active tab) to inactive instantly
      tabs.forEach(tab =>
        TweenMax.to(tab, 0, {
          backgroundColor: "#40627c",
          color: "#bdba79",
          borderBottom: "1px solid #080c0d",
          top: 0
        })
      );
      // GSAP: Hides previously active card and card image instantly
      cards.forEach(card =>
        TweenMax.to(card, 0, { display: "none", opacity: 0 })
      );
      images.forEach(image => TweenMax.to(image, 0, { opacity: 0 }));
      // GSAP: Styles active tab/card instantly
      TweenMax.to(this.tabElement, 0, {
        backgroundColor: "#679ec7",
        color: "#fffca3",
        borderBottom: "none",
        top: "1px"
      });
      TweenMax.to(this.card, 0, { display: "flex", opacity: 1 });
      // Fades in image on active tab
      TweenMax.to(this.image, 0.5, { opacity: 1 });
    }
  }
}

const tabs = Array.from(document.querySelectorAll(".feature-tab"));
const cards = Array.from(document.querySelectorAll(".feature-card"));
const images = Array.from(document.querySelectorAll(".feature-image"));
tabs.forEach(tabElement => new TabLink(tabElement));

// Applies styles to features tab/card that is active by default:
tabs[0].style.backgroundColor = "#679ec7";
tabs[0].style.color = "#fffca3";
tabs[0].style.borderBottom = "none";
tabs[0].style.top = "1px";
cards[0].style.display = "flex";
images[0].style.opacity = 1;

// Since the features tabs/cards are styled differently at the 800px screen width breakpoint, this event listener checks for < 800px and > 800px when the window is resized

// This past800 variable ensures that the < 800px and > 800px only triggers when the breakpoint is passed, and not every time the window is resized:
let past800 = false;

window.addEventListener("resize", () => {
  // If the screen width < 800px (notice the "!"), applies appropriate styles to the stacked tabs/cards:
  if (!window.matchMedia("(min-width: 800px)").matches && past800 === true) {
    past800 = false;
    // The following works for now, but reuses code from the TabLink class:
    tabs.forEach(tab =>
      TweenMax.to(tab, 0, {
        backgroundColor: "#40627c",
        color: "#bdba79",
        borderBottom: "1px solid #080c0d",
        top: 0
      })
    );
    cards.forEach(card =>
      TweenMax.to(card, 0, { display: "none", opacity: 0 })
    );
    images.forEach(image => TweenMax.to(image, 0, { opacity: 0 }));
    // Styles the 0th members of the tabs, cards, and images arrays to active:
    TweenMax.to(tabs[0], 0, {
      backgroundColor: "#679ec7",
      color: "#fffca3",
      borderBottom: "none",
      top: "1px"
    });
    TweenMax.to(cards[0], 0, { display: "flex", opacity: 1 });
    TweenMax.to(images[0], 0, { opacity: 1 });
  }

  // If the screen width > 800px, applies appropriate styles to the separated tabs/cards:
  if (window.matchMedia("(min-width: 800px)").matches && past800 === false) {
    past800 = true;
    tabs.forEach(tab => {
      TweenMax.to(tab, 0, {
        backgroundColor: "#679ec7",
        color: "#fffca3",
        borderBottom: "none",
        top: "1px"
      });
    });
    cards.forEach(card => {
      TweenMax.to(card, 0, { display: "flex", opacity: 1 });
    });
    images.forEach(image => TweenMax.to(image, 0, { opacity: 1 }));
  }
});

// Since much of the features tabs/cards styling happens upon a resize event, the following triggers a resize event once upon loading the page. It's probably not ideal, but it works and it's in the spirit of DRY.
window.dispatchEvent(new Event("resize"));
