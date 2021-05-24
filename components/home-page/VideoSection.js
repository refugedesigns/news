const VideoSection = () => {
  return (
    <div className="lg:flex lg:items-start mx-auto lg:gap-0">
      <div className="lg:w-2/3">
        <LargeVideoItem />
      </div>
      <div className="pb-4 sm:pb-4 lg:mt-4 bg-green-700">
        <SmallVideoItem />
        <SmallVideoItem />
        <SmallVideoItem />
        <SmallVideoItem />
      </div>
    </div>
  );
};

export default VideoSection;
