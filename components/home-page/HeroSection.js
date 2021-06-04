import LargeImageItem from '../news/LargeImageItem'
import TitleNewsItem from '../news/TitleNewsItem'
import Card from '../ui/Card'

const HeroSection = () => {
    return (
      <Card>
        <div className="pt-20 mx-auto lg:flex lg:items-stretch lg:mb-8 justify-center">
          <div className=" lg:self-start xl:w-5/6 xl:flex-">
            <LargeImageItem />
          </div>
          <div className="sm:w-96 mx-auto lg:ml-4 lg:-mt-4 xl:w-2/3">
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
          </div>
        </div>
      </Card>
    );
}

export default HeroSection
