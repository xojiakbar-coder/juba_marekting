import Title from "../Generic/Title/Title";
import Button from "../Generic/Button/Button";
import homePageImage from "../../assets/images/home/home-page.png";

const HomePage = () => {
  const backgroundImage = {
    backgroundImage: `url(${homePageImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundImage}
      className="w-full min-h-[600px] rounded-[30px] h-[600px] pt-[160px] pl-[100px]"
    >
      <div>
        <Title variant="primary">
          Маркетинговое
          <Title variant="secondary">Агенство в Ташкенте</Title>
        </Title>
      </div>
      <p className="text-light min-w-[700px] w-[700px] h-[60px] min-h-[60px]">
        Ваш ключ к успеху в мире маркетинга в Ташкенте. Мы предлагаем
        инновационные стратегии и решения для вашего бизнеса. Обратитесь к нам
        сегодня и достигните новых высот
      </p>
      <div className="flex flex-row gap-x-[20px] mt-[30px]">
        <Button variant="primary">Обсудить проект</Button>
        <Button variant="secondary">Коммерческое предложение</Button>
      </div>
    </div>
  );
};

export default HomePage;
