import React from "react";
import aboutUS from "../../assets/images/home/about-us.svg";
import DataCard from "../Generic/Card/Card";

const About = ({ data }) => {
  console.log(data);

  const aboutUSTextStyle = `text-gray-color font-[400] text-[16px]`;
  return (
    <div className="mt-[150px] w-full bg-light py-[150px] px-[5%]">
      <div className="flex flex-col justify-center items-center w-full">
        <h4 className="text-[36px] font-[700] font-body-font">
          JUBA - маркетинговое агентство в Ташкенте
        </h4>
        <div className="grid grid-cols-2 gap-[50px] mt-[50px] items-center">
          <div className="w-full">
            <img src={aboutUS} alt="about icon not found" className="w-full" />
          </div>
          <div className="flex flex-col justify-between py-[2px] h-full w-full">
            <p className={aboutUSTextStyle}>
              В JUBA мы специализируемся на выводе бизнеса на новые высоты в
              цифровой среде. Нас отличает индивидуальный подход к цифровому
              маркетингу. Мы понимаем, что каждый бизнес уникален, поэтому
              уделяем время изучению ваших конкретных потребностей, целей и
              целевой аудитории. Если вы хотите повысить узнаваемость бренда,
              привлечь трафик на свой сайт или увеличить конверсию, мы
              разработаем индивидуальную стратегию, которая принесет результаты.
            </p>
            <p className={aboutUSTextStyle}>
              Наш широкий спектр услуг охватывает все, что вам нужно для успеха
              в современном конкурентном цифровом мире. Мы предоставим вам всю
              необходимую информацию: от поисковой оптимизации (SEO продвижение
              сайтов ) и рекламы с оплатой за клик (контексная реклама) до
              управления социальными сетями (smm продвижение в ташкенте) и
              контент-маркетинга. Наша команда всегда идет на шаг впереди, следя
              за новейшими тенденциями и технологиями, чтобы ваши кампании
              всегда были передовыми и эффективными.
            </p>
            <p className={aboutUSTextStyle}>
              Прозрачность и общение лежат в основе всего, что мы делаем. Мы
              верим в построение прочных отношений сотрудничества с нашими
              клиентами, регулярно предоставляя обновления и информацию, чтобы
              держать вас в курсе на каждом этапе пути.
            </p>
          </div>
          <div className="flex flex-row">
            <DataCard
              title={"7+"}
              text={"лет нашая компания на рынке"}
              href={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
// Наши результаты в цифрах

// лет нашая компания на рынке

// сотрудников работают в нашей команде

// успешных проектов
