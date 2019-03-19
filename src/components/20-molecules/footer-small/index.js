import { LitElement, html, css, unsafeCSS } from 'lit-element';
import footerSmallCSS from './index.scss';

class AXAFooterSmall extends LitElement {
  static tagName = 'axa-footer-small';
  static styles = css`
    ${unsafeCSS(footerSmallCSS)}
  `;

  static get properties() {
    return {
      languageLinks: { type: Array },
      disclaimerLinks: { type: Array },
      copyrightText: { type: String },
    };
  }

  constructor() {
    super();
    this.languageLinks = [];
    this.disclaimerLinks = [];
    this.copyrightText = '';
  }

  formatText(text, arrIndex, arrLength) {
    return `${text}${arrIndex !== arrLength - 1 ? ' | ' : ''}`;
  }

  render() {
    const languageHtml = this.languageLinks.map(
      (language, index) =>
        html`
          <a class="m-footer-small__link" href="${language.link}">${this.formatText(language.text, index, this.languageLinks.length)}</a>
        `
    );

    const disclaimerHtml = this.disclaimerLinks.map(
      (disclaimer, index) =>
        html`
          <a class="m-footer-small__link" href="${disclaimer.link}"
            >${this.formatText(disclaimer.text, index, this.disclaimerLinks.length)}</a
          >
        `
    );

    return html`
      <article class="m-footer-small">
        <div class="m-footer-small__side-aligned">
          ${languageHtml}
        </div>

        <div class="m-footer-small__side-aligned">
          <div class="m-footer-small__disclaimer">
            <span>
              ${disclaimerHtml}
            </span>
            <span>
              ${this.copyrightText}
            </span>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
