const TitleNewsItem = () => {
    return (
      <div className="my-4 border-b border-green-800 pb-4">
        <h2 className="bg-green-500 w-max px-2 uppercase text-green-100 my-2">
          Bitcoin Volatility
        </h2>
        <h3 className="font-semibold text-lg text-green-200">
          Market Wrap: China Breaks Crypto as Bitcoin Falls to $36K, ETH Drops
          $300 in Two Hours
        </h3>
        <div className="flex text-green-200">
          <p className="font-semibold">Daniel Cawrey &bull;</p>
          <p className="ml-1">May 21, 2021</p>
        </div>
      </div>
    );
}

export default TitleNewsItem
