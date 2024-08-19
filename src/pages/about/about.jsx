import "./about.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="">
      <Fade direction="bottom">
        <div className="aboutContainer flex-center flex-column">
          <div className="aboutText ">
            <div className="aboutHeader">
              <h1 className=" flex-center">About Us</h1>
              <div className="p flex-center">
                <p>
                  I am Olaleye Dunsin, widely recognized as Dunsin's Graphy. As
                  a seasoned Professional Compere and an Accomplished
                  Photographer, I have honed my skills to deliver nothing short
                  of excellence in every project I undertake. With a deep
                  passion for keen eye for detail, I ensure
                  that every event I host is not just an occasion but a
                  remarkable experience that resonates with all attendees. In my
                  photography, I strive to capture the essence of every moment,
                  transforming fleeting instances into timeless memories. My
                  clients trust me not just for my technical expertise but for
                  my commitment to understanding their unique vision and
                  bringing it to life with creativity and precision. I believe
                  in building lasting relationships with my clients,
                  understanding their needs, and exceeding their expectations.
                  Whether it’s orchestrating an event that flows seamlessly or
                  capturing the perfect shot that tells a powerful story, my
                  goal is to leave a lasting impression of quality,
                  professionalism, and artistry.
                </p>
              </div>
            </div>
          </div>

          <div className="imgTextContainer flex-center">
            <div className="Abtimg1">
              <img src="/assets/10.JPG" alt="" width={350} />
            </div>

            <div className="textAbout">
              <div className="p">
                <h3>
                  At Dunsin's Graphy, a photography brand in Ilorin, Kwara
                  State, Nigeria, we capture memories and tell stories through
                  our creative images. Our goal is to bring out the best in both
                  our photography and our clients' experiences.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Link to={"/Contact"}>
        <div className="appointment flex-center link">
          <button>Book an appointment</button>
        </div>
      </Link>
    </div>
  );
};

export default About;
