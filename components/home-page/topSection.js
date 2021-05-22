import NewsHeadline from '../news/newsHeadline'
import ImageTopNewsItem from '../news/imageTopNewsItem'

const topSection = () => {
    return (
      <div className="md:flex md:justify-center md:w-screen max-w-screen-lg">
        <div className="">
          <NewsHeadline />
        </div>
        <div className="sm:flex sm:flex-wrap sm:justify-center md:flex">
          <ImageTopNewsItem />
          <ImageTopNewsItem />
          <ImageTopNewsItem />
          <ImageTopNewsItem />
          <ImageTopNewsItem />
          <ImageTopNewsItem />
        </div>
      </div>
    );
}

export default topSection
