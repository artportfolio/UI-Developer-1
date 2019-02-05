class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;

    this.card = document.querySelector(
      `.feature-card[data-tab="${this.tabData}"]`
    );

    tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab() {
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    cards.forEach(tab => tab.classList.remove("active-card"));
    this.tabElement.classList.add("active-tab");
    this.card.classList.add("active-card");
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = "flex";
  }
}

const tabs = document.querySelectorAll(".feature-tab");
const cards = document.querySelectorAll(".feature-card");
tabs.forEach(tabElement => new TabLink(tabElement));
