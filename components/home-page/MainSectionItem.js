import TitleNewsItem from '../news/TitleNewsItem'
import LargeImageItem from '../news/LargeImageItem'
import LeftImageItem from '../news/LeftImageItem'
import Card from '../ui/Card'

const MainSectionItem = () => {
    return (
      <Card>
        <div className="lg:flex justify-evenly mx-auto">
          <div className="sm:w-96 sm:mx-auto xl:w-2/6">
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
            <TitleNewsItem />
          </div>
          <div className="sm:w-2/3 sm:mx-auto lg:w-2/6 lg:ml-4">
            <LargeImageItem />
            <LargeImageItem />
          </div>
          <div className="sm:w-96 sm:mx-auto sm:mt-4 lg:ml-4 lg:-mt-4">
            <LeftImageItem />
            <LeftImageItem />
            <LeftImageItem />
            <LeftImageItem />
            <LeftImageItem />
            <LeftImageItem />
          </div>
        </div>
      </Card>
    );
}

export default MainSectionItem
