import { Fragment } from "react";
import HeroSection from "../components/home-page/HeroSection";
import MainSectionItem from "../components/home-page/MainSectionItem";

import LargeImageItem from "../components/news/LargeImageItem";
import LeftImageItem from "../components/news/LeftImageItem";
import RightImageItem from "../components/news/RightImageItem";
import TitleNewsItem from "../components/news/TitleNewsItem";
import LargeVideoItem from "../components/news/videos/LargeVideoItem";
import SmallVideoItem from "../components/news/videos/SmallVideoItem";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container p-20 mx-auto">
        <HeroSection />
        <MainSectionItem />

        
      </div>
    </Fragment>
  );
};

export default HomePage;
