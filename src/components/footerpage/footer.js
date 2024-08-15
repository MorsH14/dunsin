import "./footer.css"
import { FaInstagram } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";







const Footer =()=>{
    return(
        <div className="footerContainer">

        <div className="footerContent flex-around">
            
            <div className="around flex-column">
                <div className="">
                    <img src="./assets/mclth.png" alt="" width={100}/>
                </div>

                <div className="contactLogo flex-center gap-10">

                    <a href="https://www.instagram.com/dunsins_graphy?igsh=MW9vYjJhZzR2cmIyeQ==">
                    <FaInstagram size={25} color="red"/>
                    </a>
                    <a href="https://Wa.me//+2349025937934"><div>
                    <FaWhatsapp size={25} color="green"/>
                    </div>
                    </a>
                </div>
            </div>

            <div className="contactContainer flex-center flex-column c-pointer">

                <div className=" mar-20">
                    <h3>Contact me</h3>
                </div>

                <div className=" flex-center gap-10">
                <CiMail size={20}/>
                    <a href="mailto:" className="linkTag">----@gmail.com</a>
                </div>
                <a href="tell" className=" flex-center gap-10 linkTag">
                <IoMdCall size={20}/>
                    <p>+234-902-593-7934</p>
                </a>
            </div>

        </div>
            <div className="reservedContainer flex-center">
                <div className="hrLine"></div>
            <p>@Dunsin's Studio</p>
            <div className="hrLine"></div>
            </div>
        </div>

        
    )
}


export default Footer