import React, { Component } from "react";
import Header from "./components/Header"
import Control from "./components/Control"
import Output from "./components/Output"
import Footer  from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      memeImage: []
    }
  }

  updateImageAndText = (top, bottom, img) => {
    this.setState({topText: top});
    this.setState({bottomText: bottom});
    this.setState({memeImage: img});
  };

  render() {
  return (
     <>
        <Header />
        <Control updateUI={this.updateImageAndText} />
        <Output 
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          memeImage={this.state.memeImage}
       />
        <Footer />
      </>
    );
  }
}

export default App;