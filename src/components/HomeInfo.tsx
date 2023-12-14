import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
interface Props {
  text: string;
  link: string;
  btnText: string;
}
interface PropsHome {
  currentStage: number;
}

const InfoBox = ({ text, link, btnText }: Props) => {
  return (
    <div className="info-box">
      <p className="font-medium text-center sm:text-xl">{text}</p>

      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm
      <span className="font-semibold mx-2 text-white">Alireza</span>
      👋
      <br />A Software Engineer from Germany 🇩🇪
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Worked with many companies and picked up many skills along the way"
      }
      btnText={"Learn more"}
      link={"/About"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Led multiple projects to success over the years. Curious about the impact?"
      }
      btnText={"Visit my portfolio"}
      link={"/"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few keystrokes away"
      }
      btnText={"Let's talk"}
      link={"/Contact"}
    />
  ),
};

const HomeInfo = ({ currentStage }: PropsHome) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return renderContent[currentStage] || null;
};

export default HomeInfo;
