import "./nav.css";
import { PiList } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const showNav = () => {
    setIsShow(!isShow);
  };

  return (
    <nav>
      <a href="/">
      <div className="navlogo flex-center gap-10">

         <img src="/assets/dl-removebg-preview.png" alt="" width={250}/>
        <div className="gold">
          <div className="innerGold"></div>
        </div>
      </div>
      </a> 

        
        <ul className="dropdown-menu2">
          <a className=" linkTag" href="/about"><li>About</li></a>
          <a className=" linkTag" href="/gallery"><li>Gallery</li></a>
          <a className=" linkTag" href="/contact"><li>Contact Us</li></a>
        </ul>

      {isShow ? (
        <ul className="dropdown-menu">
          <a className=" linkTag" href="/about"><li>About</li></a>
          <a className=" linkTag" href="/gallery"><li>Gallery</li></a>
          <a className=" linkTag" href="/contact"><li>Contact Us</li></a>
        </ul>
      ) : null}

      <div className="dropDown" onClick={showNav}>
        <PiList size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
