import Image from 'next/image'

const RightImageItem = () => {
    return (
      <div className="py-4 border-b border-green-800 flex flex-row-reverse justify-between">
        <div className="hidden lg:block lg:mx-2">
          <Image src="https://images.unsplash.com/photo-1607303169117-7bc8822a6a34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width={250} height={180}  />
        </div>
        <div className="lg:w-2/3">
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
      </div>
    );
}

export default RightImageItem
