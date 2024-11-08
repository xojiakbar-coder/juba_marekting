import { Link } from "react-scroll";
import jubaLogo from "../../assets/icons/logo.svg";
import useSize from "../../hooks/useSize";

const Logo = ({ onClose }) => {
  const { width: w } = useSize();
  const logoTitleProperty = `text-yellow font-body-font text-[16px] font-[700] leading-[20px]`;
  return (
    <Link
      to="/"
      smooth={true}
      duration={600}
      className="cursor-pointer"
      onClick={() => onClose}
    >
      <div className="flex items-center gap-x-[5px] min-w-[190px] w-[190px] min-h-[90px] h-[90px]">
        <img
          src={jubaLogo}
          alt="Juba logo not found"
          className={`w-[76px] h-[76px] min-h-[55px] min-w-[55px]`}
        />
        <strong className="flex flex-col items-start justify-start">
          <b className={logoTitleProperty}>Juba</b>
          <b className={logoTitleProperty}>Marketing</b>
        </strong>
      </div>
    </Link>
  );
};

export default Logo;
