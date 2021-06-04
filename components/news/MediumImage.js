import Image from 'next/image'
import Card from '../ui/Card'

const MediumImage = (props) => {
    return (
      <Card>
        <div className="cursor-pointer py-16 w-96   lg:border-none group">
          <div className="relative">
            <div className="item-zoom z-10">
              <div className="">
                <Image
                  src="https://images.unsplash.com/photo-1607303169117-7bc8822a6a34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  width={800}
                  height={500}
                />
              </div>
            </div>
            <h2 className="absolute bottom-0 z-20 bg-[#9DAAF2] text-gray-100 px-2">
              OPINION
            </h2>
            <div className="absolute h-60 w-80 -top-5 -left-5 bg-[#9DAAF2] transition duration-200 ease-in transform sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2"></div>
          </div>
          <div>
            <h2
              className={`font-bold text-2xl ${
                props.textColor ? props.textColor : "text-gray-100"
              }`}
            >
              Money Reimagined: Hey Elon, Bitcoin Can Green the Grid
            </h2>
            <div
              className={`flex items-center text-sm ${
                props.textColor ? props.textColor : "text-gray-100"
              }`}
            >
              <p className="font-semibold">Michael J.Casey &bull;</p>
              <p className="ml-1">May 21, 2021</p>
            </div>
            <p
              className={`${
                props.textColor ? props.textColor : "text-gray-100"
              } text-sm`}
            >
              Decentralization of the energy system and the money system can go
              hand in hand, says CoinDesk's chief content officer.
            </p>
          </div>
        </div>
      </Card>
    );
}

export default MediumImage
