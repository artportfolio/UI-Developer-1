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

// Slideshow (placeholder)

// Features tabs/cards

class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    // matches active card to active tab:
    this.tabData = this.tabElement.dataset.tab;
    this.card = document.querySelector(
      `.feature-card[data-tab="${this.tabData}"]`
    );
    // Applies styles to features tab/card that is active by default:
    this.tabElement.style.backgroundColor = "263b4a";
    this.tabElement.style.color = "fffca3";
    this.card.style.display = "block";

    tabElement.addEventListener("click", () => this.selectTab());
  }
  selectTab() {
    // GSAP: Fades all tabs (and thereby the active tab) to inactive
    tabs.forEach(tab => TweenMax.to(tab, 0.3, { backgroundColor: "#263b4a" }));
    // GSAP: Hides previously active card
    cards.forEach(card =>
      TweenMax.to(card, 0, { display: "none", opacity: 0 })
    );
    // GSAP: Fades in active tab/card
    TweenMax.to(this.tabElement, 0.3, { backgroundColor: "#679ec7" });
    TweenMax.to(this.card, 0.3, { display: "block", opacity: 1 });
  }
}

const tabs = document.querySelectorAll(".feature-tab");
const cards = document.querySelectorAll(".feature-card");
tabs.forEach(tabElement => new TabLink(tabElement));
