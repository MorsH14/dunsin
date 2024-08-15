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
                I am Oladunjoye john temitope, well known as BetaBeliefBoy, a
                Professional compere a Skilled Master of Ceremony, an event host
                with Uncommon Creativity. As a master of ceremony par
                excellence, I have consistently delivered top notch and
                outstanding value to clients in the corporate & social world
                with touch of uniqueness, spontaneity and great sense of humor.
                This has made BetaBeliefBoy the preferred MC by event planners,
                couples, families and organizations within nigeria. As a
                seasoned professional, i understands the importance of
                delivering top-notch service in a timely manner and I do it with
                lightning-fast precision. I’m known for my ability to seamlessly
                navigate any event, ensuring a smooth and memorable experience
                for both the audience and my clients.
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
                At BetaBelieveEvents, we believe that every event is a unique
                story waiting to be told. Founded in [Year], our journey began
                with a passion for creating unforgettable experiences. With over
                [X] years of experience in the industry, we specialize in
                crafting personalized events that reflect the personality and
                vision of our clients. Whether it’s a grand wedding or an
                intimate gathering, we bring our expertise, creativity, and
                dedication to every detail, ensuring your event is not just
                memorable but magical.
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
