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
    // Matches active card to active tab:
    this.tabData = this.tabElement.dataset.tab;
    this.card = document.querySelector(
      `.feature-card[data-card="${this.tabData}"]`
    );
    // Applies "click" event listener to all tabs:
    tabElement.addEventListener("click", () => this.selectTab());
  }
  selectTab() {
    // GSAP: Changes all tabs (and thereby the active tab) to inactive instantly
    tabs.forEach(tab =>
      TweenMax.to(tab, 0, { backgroundColor: "#263b4a", color: "#bdba79" })
    );
    // GSAP: Hides previously active card instantly
    cards.forEach(card =>
      TweenMax.to(card, 0, { display: "none", opacity: 0 })
    );
    // GSAP: Fades in active tab/card
    TweenMax.to(this.tabElement, 0.3, {
      backgroundColor: "#679ec7",
      color: "#fffca3"
    });
    TweenMax.to(this.card, 0.3, { display: "block", opacity: 1 });
    // Rounds upper-left corner of feature cards 2 and 3:
    if (this.tabData === `feature 2` || this.tabData === `feature 3`) {
      TweenMax.to(this.card, 0.3, { borderTopLeftRadius: "6px" });
    }
  }
}

const tabs = document.querySelectorAll(".feature-tab");
const cards = document.querySelectorAll(".feature-card");
tabs.forEach(tabElement => new TabLink(tabElement));

// Applies styles to features tab/card that is active by default:
tabs[0].style.backgroundColor = "#679ec7";
tabs[0].style.color = "#fffca3";
cards[0].style.display = "block";
