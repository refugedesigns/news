import NewsSectionHeader from '../news/newsSectionHeader'
import NewsTitleItem from '../news/newsTitleItem'
import ImageLargeNewsItem from '../news/imageLargeNewsItem'


const middleSection = () => {
    return (
      <div className="lg:flex">
        <div className="sm:m-8 lg:flex-1">
          <NewsSectionHeader>Most Popular</NewsSectionHeader>
          <NewsTitleItem />
          <NewsTitleItem />
          <NewsTitleItem />
          <NewsTitleItem />
          <NewsTitleItem />
          <NewsTitleItem />
        </div>
        <div className="flex flex-wrap justify-center items-start sm:flex sm:flex-wrap sm:justify-center md:flex md:flex-wrap lg:flex-wrap md:mt-4 lg:mt-8">
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
          <ImageLargeNewsItem />
        </div>
      </div>
    );
}

export default middleSection
