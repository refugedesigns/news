import Card from '../ui/Card'
import LargeVideoItem from '../news/videos/LargeVideoItem'
import SmallVideoItem from '../news/videos/SmallVideoItem'

const VideoSection = () => {
  return (
    <Card>
      <div className="py-16 lg:flex lg:justify-center lg:items-center mx-auto lg:gap-0">
        <div className="lg:w-2/3">
          <LargeVideoItem />
        </div>
        <div className="pb-4 sm:pb-4 lg:mt-4 bg-[#9DAAF2]">
          <SmallVideoItem />
          <SmallVideoItem />
          <SmallVideoItem />
          <SmallVideoItem />
        </div>
      </div>
    </Card>
  );
};

export default VideoSection;
