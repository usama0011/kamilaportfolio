export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kamila</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Its Kamila Aqeel. I am frontend developer specializing in React.js. With a keen eye for design and a passion for creating engaging user experiences, Kamila brings websites and applications to life with her expertise in React.js.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/kamila.png" alt="Hero Section" />
      </div>
    </section>
  );
}
