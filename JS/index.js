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

// Slideshow

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

const autoSlideshow = setInterval(slide, 3000);

// Features tabs/cards

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
    this.tabElement.style.borderBottom = "1px solid #080c0d";
    // Applies "click" event listener to all tabs:
    tabElement.addEventListener("click", () => this.selectTab());
  }
  selectTab() {
    // GSAP: Changes all tabs (and thereby the active tab) to inactive instantly
    tabs.forEach(tab =>
      TweenMax.to(tab, 0, {
        backgroundColor: "#40627c",
        color: "#bdba79",
        borderBottom: "1px solid #080c0d"
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
      borderBottom: "none"
    });
    TweenMax.to(this.card, 0, { display: "block", opacity: 1 });
    // Fades in image on active tab
    TweenMax.to(this.image, 0.5, { opacity: 1 });
  }
}

const tabs = document.querySelectorAll(".feature-tab");
const cards = document.querySelectorAll(".feature-card");
const images = document.querySelectorAll(".feature-image");
tabs.forEach(tabElement => new TabLink(tabElement));

// Applies styles to features tab/card that is active by default:
tabs[0].style.backgroundColor = "#679ec7";
tabs[0].style.color = "#fffca3";
tabs[0].style.borderBottom = "none";
cards[0].style.display = "block";
images[0].style.opacity = 1;
