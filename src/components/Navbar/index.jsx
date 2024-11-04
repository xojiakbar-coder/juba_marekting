import Logo from "./Logo";
import Body from "./Body";
import Lang from "./Lang";
import Items from "./Items";
import { message } from "antd";
import useSize from "../../hooks/useSize";
import Button from "../Generic/Button/Button";

const Navbar = () => {
  const { width } = useSize();
  const textToCopy = `+998 97 143 22 20`;
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Juba phone number copied to clipboard!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Juba phone number did not copied",
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      success();
    } catch (err) {
      error();
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
          <Button
            variant="outline"
            hover={true}
            title="click for copy"
            onClick={handleCopy}
          >
            {textToCopy}
          </Button>
          <a href="#"></a>
        </div>
      </div>
      <Body />
    </div>
  );
};

export default Navbar;
