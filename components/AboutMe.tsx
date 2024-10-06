import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
      style={{backgroundColor: "#1C1E1E"}}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16" >
        <h1 className="text-3xl uppercase font-semibold text-center">
          About me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I'm{" "}
          <span className="font-bold tracking-wider text-white">
            Pranav Patel
          </span>{" "}
          and I'm a {" "}
          <span className="font-bold text-white">Software Developer</span>  with a strong command of web development, as well as artificial intelligence and machine learning. My expertise spans across front-end and back-end development, where I bring ideas to life with clean, efficient code and a deep understanding of user experience.
<br /><br />
With a knack for problem-solving, I thrive on tackling challenges and finding innovative solutions. I have extensive experience working collaboratively in team environments and possess solid team leadership skills that drive projects forward effectively. I believe in continuous learning and adaptability, always seeking new ways to improve my skills and deliver value.
<br /><br />
Whether it's building web applications, developing intelligent solutions, or leading teams to success, I am committed to crafting quality software that makes an impact.
        </p>
        <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web design" />
          <AboutList title="Model Training" />
          
          <AboutList title="Front-end development" />
          <AboutList title="Predictive Modeling" />
          
          <AboutList title="User experience" />
          <AboutList title="Data Analysis" />
          
          <AboutList title="Back-end development" />
          <AboutList title="Feature Engineering" />
          
          <AboutList title="Responsive" />
          <AboutList title="Deep Learning Implementation" />
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
