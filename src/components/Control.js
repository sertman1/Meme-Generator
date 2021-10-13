import React, { Component } from "react";

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: ""
        };
    }

    changeTopWord = (event) => {
        this.setState({topText: event.target.value})
    }

    changeBottomWord = (event) => {
        this.setState({bottomText: event.target.value})
    }

    fetchMemes = (event) => {
        event.preventDefault();
        const memeAPI = "https://api.imgflip.com/get_memes";
        fetch(`${memeAPI}`)
            .then((response) => response.json())
            .then(data => {
                const images = data.data.memes;
                const image = images[Math.floor(Math.random() * images.length)];
                this.props.updateUI(this.state.topText, this.state.bottomText, image);
            })
            .catch(err => console.log(err));
    };

    render() {
    return (
        <section className="section">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth is-family-monospace"
              id="top-input"
              placeholder="Top text"
              type="text"
              value={this.state.topText}
              onChange={this.changeTopWord}
            />
          </div>
        </div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth is-family-monospace"
              id="bottom-input"
              placeholder="Bottom text"
              type="text"
              value={this.state.bottomText}
              onChange={this.changeBottomWord}
            />
          </div>
        </div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <button 
              className="button is-link is-large is-fullwidth" 
              id="go-btn"
              onClick={this.fetchMemes}
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