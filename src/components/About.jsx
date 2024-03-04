import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about section" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a passionate full-stack developer who loves to code. I work
            hard to achieve my goals and I believe on my problem-solving
            skills.Presently I hold MERN stack as my weapon and now I am trying
            to make myself comfortable with Springboot and Angular as my new
            weapons.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
