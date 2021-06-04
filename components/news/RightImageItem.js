import Image from 'next/image'
import Card from '../ui/Card'

const RightImageItem = () => {
    return (
      <Card>
        <div className="relative py-16 border-b border-[#1A2238] flex flex-row-reverse justify-between items-center mx-auto hover:cursor-pointer transition duration-200 ease-in transform sm:hover:scale-110 group">
          <div className="hidden z-50 lg:block lg:mx-4 lg:flex lg:justify-center lg:items-center">
            <Image
              src="https://images.unsplash.com/photo-1607303169117-7bc8822a6a34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              width={400}
              height={300}
            />
          </div>
          <div className="absolute hidden lg:block top-20 right-10 h-24 w-32 xl:h-28 xl:top-14 xl:right-8 xl:w-44 2xl:w-60 2xl:h-40 2xl:top-10 bg-[#1A2238] opacity-0 group-hover:opacity-60"></div>
          <div className="">
            <h2 className="bg-[#FF6A3D] w-max px-2 uppercase text-gray-100 my-2">
              Bitcoin Volatility
            </h2>
            <h3 className="font-semibold text-lg text-[#1A2238] lg:font-bold lg:text-xl">
              Market Wrap: China Breaks Crypto as Bitcoin Falls to $36K, ETH
              Drops $300 in Two Hours
            </h3>
            <div className="flex text-[#1A2238] lg:font-bold">
              <p className="font-semibold lg:font-bold">Daniel Cawrey &bull;</p>
              <p className="ml-1">May 21, 2021</p>
            </div>
          </div>
        </div>
      </Card>
    );
}

export default RightImageItem
