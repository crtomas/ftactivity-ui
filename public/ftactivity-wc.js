class FTActivityDashboard extends HTMLElement {
 constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `
            <style>
                p {
                    color: navy;
                }
            </style>
            <p>FTActivity v2!</p>
    `;
  }
}
window.customElements.define("ftactivity-dashboard", FTActivityDashboard);