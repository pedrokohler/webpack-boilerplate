import { LitElement, html } from "lit-element";

export default class HomePage extends LitElement {
  render() {
    return html`
            <div>
                <h1>Hello world, this is ${process.env.NODE_ENV}</h1>
            </div>
        `;
  }
}

window.customElements.define("home-page", HomePage);
