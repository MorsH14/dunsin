import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homeContainer">
      <div className="homeHeader flex-center">
        <h1>Your special moments captured authentically</h1>
      </div>

      <div className="backgroundYellow"></div>

      <div className="homeImages flex-center gap-20">
        <div className="imgTag"></div>
        <div className="imgTag2"></div>
        <div className="imgTag3"></div>
      </div>

      <div className=" flex-center flex-column">

        <div className="aboutHome">
          <h1>
            ABOUT ME!
          </h1>
        </div>
        <div className="aboutHomeContainer">
          <div className="leftImg">
            <div className="text">
              <h1>Hey I'm Dunsin's Graphy Studios,</h1>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum repudiandae, praesentium eum enim voluptates ducimus ab expedita sit cupiditate omnis magnam iure, veniam numquam ex fugit atque sapiente blanditiis distinctio quam eveniet nam! Maxime, cupiditate quos quaerat enim hic sed nihil facere expedi <br/> ta dolor perspiciatis recusandae harum omnis ipsum, commodi distinctio adipisci est voluptas ullam iste nam labore fugiat cumque animi. Dolore, aliquid accusantium. Molestias ipsam nemo, dicta aliquam vitae mollitia. Nam saepe quam dign <br/> issimos dolor autem, omnis id porro, quia nihil eius voluptas. Iste voluptatum aperiam ab eveniet, soluta molestias assumenda repudiandae eos ad cumque eaque sed obcaecati velit culpa similique ipsum, et reiciendis natus aspernatur blanditiis sint expedita? Reiciendis molestias doloribus blanditiis nihil? Distinctio earum nam quibusdam quam dignissimos a minus! Officiis, aliquid asperiores voluptate nisi a r.</p>
            </div>
          </div>

          <div className="rightContentt"></div>
        </div>
      </div>

     <div className="">
     <div className="homeImages flex-center gap-20">
        <div className="imgTagD"></div>
        <div className="imgTagD2"></div>
        <div className="imgTagD3"></div>
      </div>
     </div>

      <Link to={"/Contact"}className="linkTag">
        <div className="appointment flex-center ">
          <button>Book an appointment</button>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
