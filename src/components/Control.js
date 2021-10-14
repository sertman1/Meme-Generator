import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {  // textFields represent the state of the 2 search bars
            topText: "",
            bottomText: ""
        };
    }

    // these functions allow the user to type input into either
    // search bar and have it continuosly display what they are typing
    changeTopWord = (event) => {
        this.setState({topText: event.target.value})
    }
    changeBottomWord = (event) => {
        this.setState({bottomText: event.target.value})
    }

    fetchMemes = async (event) => {
        event.preventDefault();
        const memeAPI = "https://api.imgflip.com/get_memes";
        try {
          const response = await axios.get(`${memeAPI}`);
          const data = response.data;
          const images = data.data.memes;
          const image = images[Math.floor(Math.random() * images.length)];
          // a call to fetchMemes means the user clicked 'Go!', so we must
          // update the UI with both their inputed text and the fetched image:
          this.props.updateUI(this.state.topText, this.state.bottomText, image);
        } catch (err) {
          console.log(err);
        }
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

Control.propTypes = {
    updateUI: PropTypes.func.isRequired
};

export default Control;