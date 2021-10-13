import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
        <section class="section">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              class="input is-large is-fullwidth is-family-monospace"
              id="top-input"
              placeholder="Top text"
              type="text"
            />
          </div>
        </div>
        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              class="input is-large is-fullwidth is-family-monospace"
              id="bottom-input"
              placeholder="Bottom text"
              type="text"
            />
          </div>
        </div>
        <div class="field has-addons">
          <div class="control is-expanded">
            <button 
              class="button is-link is-large is-fullwidth" 
              id="go-btn"
            >
              Go!
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Control;