import Logo from "./Logo";
import Body from "./Body";
import Lang from "./Lang";
import Items from "./Items";
import useSize from "../../hooks/useSize";
import Button from "../Generic/Button/Button";
import useMessages from "../../hooks/useMessage";

const Navbar = () => {
  const { width } = useSize();
  const textToCopy = `+998 97 143 22 20`;
  const { contextHolder, showMessage } = useMessages();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      showMessage({
        type: "success",
        content: "Juba phone number copied",
        duration: 2.5,
      });
    } catch (err) {
      showMessage({
        type: "error",
        content: "Xatolik yuz berdi",
        duration: 2.5,
      });
    }
  };

  return (
    <div className="flex flex-col mt-[25px] w-full relative z-[999]">
      {contextHolder}
      <div className="flex items-center justify-between px-[5%]">
        <Logo />
        {width > 1024 ? <Items /> : null}
        <div className="flex flex-row justify-between gap-[30px]">
          <Lang />
          <a href="https://t.me/JubaMarketing" target="_blank">
            <Button
              variant="outline"
              hover={true}
              title="click for copy"
              onClick={handleCopy}
            >
              {textToCopy}
            </Button>
          </a>
        </div>
      </div>
      <Body />
    </div>
  );
};

export default Navbar;
