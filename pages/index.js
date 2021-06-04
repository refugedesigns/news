import { Fragment } from "react";
import HeroSection from "../components/home-page/HeroSection";
import MainSectionItem from "../components/home-page/MainSectionItem";
import Wrapper from '../components/ui/Wrapper'

import {fetchFirstPage} from '../helpers/fetch-news'

import LargeImageItem from "../components/news/LargeImageItem";
import LeftImageItem from "../components/news/LeftImageItem";
import RightImageItem from "../components/news/RightImageItem";
import TitleNewsItem from "../components/news/TitleNewsItem";
import LargeVideoItem from "../components/news/videos/LargeVideoItem";
import SmallVideoItem from "../components/news/videos/SmallVideoItem";
import VideoSection from "../components/home-page/VideoSection";
import Footer from '../components/Layout/footer/Footer'

const HomePage = (props) => {
  console.log(props.allNews)
  return (
    <Fragment>
      <HeroSection />
      <MainSectionItem />
      <Wrapper smallTitle="Recent" largeTitle="Recent">
        <RightImageItem />
        <RightImageItem />
        <RightImageItem />
        <RightImageItem />
        <RightImageItem />
      </Wrapper>
      <VideoSection />
      <Wrapper smallTitle="Events" largeTitle="Events">
        <div className="px-16 pb-16">
          <LargeImageItem textColor="text-[#1A2238]" />
          <LargeImageItem textColor="text-[#1A2238]" />
          <LargeImageItem textColor="text-[#1A2238]" />
          <LargeImageItem textColor="text-[#1A2238]" />
        </div>
      </Wrapper>
    </Fragment>
  );
};

// export async function getStaticProps() {
   
//   const allNews = await fetchFirstPage()

//     return {
//       props: {
//         allNews: allNews
//       }
//     }
// }

export default HomePage;
