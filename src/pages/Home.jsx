function Home() {
  return (
    <>
      <div className="homeTitleBack"></div>
      <h1 className="homeTitle">
        <span className="colText">Healthy</span> meals, zero fuss
      </h1>
      <p className="homeDesc">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>
      <button className="btn btn__main">Start exploring</button>
      <div className="mainPic">
        <img className="homePat" src="/assets/pattern-squiggle-1.svg" alt="" />
        <img className="mbpattern" src="/assets/mbatt.svg" alt="" />
        <img
          className="main__hero__img"
          src="/assets/image-home-hero-large.webp"
          alt=""
        />
      </div>
      <br />
      <br />
      <br />
      <main className="main">
        <h1 className="mainTitle">What you’ll get</h1>
        <div className="func">
          <div className="wholePost">
            <img
              className="wholeIcon"
              src="/assets/icon-whole-food-recipes.svg"
              alt=""
            />
            <h3 className="wholeTitle">Whole-food recipes</h3>
            <p className="wholeDesc">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>
          <div className="minimumPost">
            <img
              className="mimimumIcon"
              src="/assets/icon-minimum-fuss.svg"
              alt=""
            />
            <h3 className="minimumTitle">Minimum fuss</h3>
            <p className="minimumDesc">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
          <div className="searchPost">
            <img
              className="searchIcon"
              src="/assets/icon-search-in-seconds.svg"
              alt=""
            />
            <h3 className="searchTitle">Search in seconds</h3>
            <p className="searchDesc">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </main>
      <hr className="secHr" />
      <section>
        <div className="realLife">
          <h1 className="secTitle">Built for real life</h1>
          <p className="secDesc">
            Cooking shouldn’t be complicated. These recipes come in under
            <span className="secDescCol">30 minutes</span> of active time, fit
            busy schedules, and taste good enough to repeat.
            <br />
            <br />
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
          <div className="secDescText"></div>
          <img
            className="secImg"
            src="/assets/image-home-real-life-large.webp"
            alt=""
          />
        </div>
      </section>
      <footer className="footer">
        <img className="footerImg" src="/assets/footerImg.png" alt="" />
        <img
          className="footerTabImg"
          src="/assets/footerTabaletImg.png"
          alt=""
        />
        <div className="footerItems">
          <h1 className="footerTitle">Ready to cook smarter?</h1>
          <p className="footerDesc">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button className="btn footerBtn">Browse recipes</button>
        </div>
        <div className="authItem">
          <h3 className="authTitle">Made with ❤️ and 🥑</h3>
          <div className="authApp">
            <img src="/assets/icon-instagram.svg" alt="" />
            <img src="/assets/icon-bluesky.svg" alt="" />
            <img src="/assets/icon-tiktok.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
