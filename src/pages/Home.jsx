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
        </div>
      </main>
    </>
  );
}

export default Home;
