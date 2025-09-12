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
    </>
  );
}

export default Home;
