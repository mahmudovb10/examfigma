function About() {
  return (
    <div>
      <div className="abContent">
        <h3 className="aboutTitle">Our mission</h3>
        <div className="abTitleCol"></div>
        <h1 className="abTitleMain">
          Help more people cook nourishing meals, more often.
        </h1>
        <p className="abDesc">
          Healthy Recipe Finder was created to prove that healthy eating can be
          convenient, affordable, and genuinely delicious.
        </p>
        <p className="abDescTwo">
          We showcase quick, whole-food dishes that anyone can master—no fancy
          equipment, no ultra-processed shortcuts—just honest ingredients and
          straightforward steps.
        </p>
        <img
          className="abImg"
          src="/assets/image-about-our-mission-large.webp"
          alt=""
        />
      </div>
      <hr className="abHr" />
      <div className="abExist">
        <h1 className="existTitle">Why we exist</h1>
        <img
          className="bulletIcon"
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="oneBull">Cut through the noise.</h3>
        <p className="oneBullDesc">
          The internet is bursting with recipes, yet most busy cooks still
          default to take-away or packaged foods. We curate a tight collection
          of fool-proof dishes so you can skip the scrolling and start cooking.
        </p>
        <img
          className="bulletIcon "
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="bullTitle ">Empower home kitchens.</h3>
        <p className="bullDesc">
          When you control what goes into your meals, you control how you feel.
          Every recipe is built around unrefined ingredients and ready in about
          half an hour of active prep.
        </p>
        <img
          className="bulletIcon"
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="bullTitle">Make healthy look good.</h3>
        <p className="bullDesc">
          High-resolution imagery shows you exactly what success looks
          like—because we eat with our eyes first, and confidence matters.
        </p>
      </div>
      <hr className="abCenHr" />
      <div className="philo">
        <h1 className="philoTitle">Our food philosophy</h1>
        <img
          className="bulletIcon"
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="bullTitle">Whole ingredients first.</h3>
        <p className="bullDesc">
          Fresh produce, grains, legumes, herbs, and quality fats form the
          backbone of every recipe.
        </p>
        <img
          className="bulletIcon"
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="bullTitle">Flavor without compromise.</h3>
        <p className="bullDesc">
          Spices, citrus, and natural sweetness replace excess salt, sugar, and
          additives.
        </p>
        <img
          className="bulletIcon"
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="bullTitle">Respect for time.</h3>
        <p className="bullDesc">
          Weeknight meals should slot into real schedules; weekend cooking can
          be leisurely but never wasteful.
        </p>
        <img
          className="bulletIcon"
          src="/assets/icon-bullet-point.svg"
          alt=""
        />
        <h3 className="bullTitle">Sustainable choices.</h3>
        <p className="bullDesc">
          Short ingredient lists cut down on food waste and carbon footprint,
          while plant-forward dishes keep things planet-friendly.
        </p>
      </div>
      <hr className="stHr" />
      <div className="beyond">
        <h1 className="beyondTitle">Beyond the plate</h1>
        <p className="beyondDesc">
          We believe food is a catalyst for community and well-being. <br /> By
          sharing approachable recipes, we hope to:
        </p>
        <ul className="abUl">
          <li className="abLi">Encourage family dinners and social cooking.</li>
          <li className="abLi">
            Reduce reliance on single-use packaging and delivery waste
          </li>
          <li className="abLi">
            Spark curiosity about seasonal produce and local agriculture.
          </li>
        </ul>
        <img
          className="beyondImg"
          src="/assets/image-about-beyond-the-plate-large.webp"
          alt=""
        />
      </div>
      <footer className="footer abFooter">
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
        <div className="authItem abauth">
          <h3 className="authTitle">Made with ❤️ and 🥑</h3>
          <div className="authApp">
            <img src="/assets/icon-instagram.svg" alt="" />
            <img src="/assets/icon-bluesky.svg" alt="" />
            <img src="/assets/icon-tiktok.svg" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
