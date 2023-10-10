import { Link } from "react-router-dom";
import logo from "../../assets/Background.png";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import "../../CustomStyle.css";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-50 ">
        <aside>
          <Link to={"/"} className="flex gap-2 items-center font-bold text-2xl">
            <img className="w-16 h-16" src={logo} alt="" />
            <span>Luky Toys</span>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="lucktoys@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary bg-cyan-600 border-cyan-600 text-white absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </aside>
        <nav>
          <header className="footer-title text-lg textColor">Contact</header>
          <div className="flex gap-2 items-center text-lg">
            <IoMdCall className="font-bold text-xl text-cyan-600" />
            <div>
              <p className="link link-hover">01518-935317</p>
              <p className="link link-hover">01874-343995</p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-lg">
            <AiOutlineMail className="font-bold text-xl text-cyan-600" />
            <span className="link link-hover">lucktoys@gmail.com</span>
          </div>
        </nav>
        <nav>
          <header className="footer-title text-lg textColor">
            Social Media
          </header>
          <Link className="link link-hover text-lg">FaceBook</Link>
          <Link className="link link-hover text-lg">Youtube</Link>
          <Link className="link link-hover text-lg">Instagram</Link>
        </nav>
        <nav>
          <header className="footer-title text-lg textColor">Adress</header>
          <div className="flex items-center  gap-2 ">
            <CiLocationOn className="font-bold text-xl text-cyan-600" />
            <a className="link link-hover text-lg">
              203 Fake St. Mount View, <br /> Tala-Saktkhira, Khulna <br />{" "}
              Bangladesh
            </a>
          </div>
        </nav>
      </footer>
      <CopyRight/>
    </div>
  );
};

export default Footer;
