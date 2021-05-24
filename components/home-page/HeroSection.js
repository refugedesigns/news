import LargeImageItem from '../news/LargeImageItem'
import TitleNewsItem from '../news/TitleNewsItem'

const HeroSection = () => {
    return (
        <div className="mx-auto lg:flex lg:items-stretch lg:mb-8 justify-center">
          <div className=" lg:self-start xl:w-5/6 xl:flex-">
            <LargeImageItem />
          </div>
          <div className="sm:w-96 mx-auto lg:ml-4 lg:-mt-4">
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
          </div>
        </div>
    );
}

export default HeroSection
