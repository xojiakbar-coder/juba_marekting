import Title from "../Generic/Title/Title";
import Button from "../Generic/Button/Button";
import homePageImage from "../../assets/images/home/home.png";

const HomePage = ({ data }) => {
  const { title, short_description } = data[0];

  const backgroundImage = {
    backgroundImage: `url(${homePageImage})`,
    opacity: "0.9",
    backgroundSize: "cover",
    backgroundColor: "#000",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      style={backgroundImage}
      className="flex flex-col w-full min-h-[600px] gap-[20px] rounded-[30px] h-[600px] pt-[160px] pl-[100px]"
    >
      <div>
        <Title variant="secondary" className="w-[60%]">
          {title && title}
        </Title>
      </div>
      <p className="text-light min-w-[50%] w-[50%] h-[60px] min-h-[60px] leading-[28px]">
        {short_description && short_description}
      </p>
      <div className="flex flex-row gap-x-[20px] mt-[30px]">
        <Button variant="primary">Обсудить проект</Button>
        <Button variant="secondary">Коммерческое предложение</Button>
      </div>
    </div>
  );
};

export default HomePage;
