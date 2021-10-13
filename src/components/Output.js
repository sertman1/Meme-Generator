function Output (props) {
    const { topText } = props;
    const { bottomText } = props;
    const { memeImage } = props;
    return(
        <section className="section is-medium pt-0 pb-6 has-text-centered" >
        <article className="message is-medium" >
          <div className="message-body" id="output">
            <div className="meme">
              <img id="img" width="800rem" height="auto" src={memeImage.url}/>
              <h2 id="top-text" className="top">{topText}</h2>
              <h2 id="bottom-text" className="bottom">{bottomText}</h2>
            </div>
          </div>
        </article>
      </section>
    );
}

export default Output;