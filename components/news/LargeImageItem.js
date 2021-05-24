import Image from 'next/image'

const LargeImageItem = () => {
    return (
      <div className="border-b py-4 lg:pt-0  lg:border-none">
        <div className="relative">
        <Image src="https://images.unsplash.com/photo-1607303169117-7bc8822a6a34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width={800} height={500} layout="responsive" />
        <h2 className="absolute top-5 bg-green-500 text-green-100 px-2">OPINION</h2>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-green-100">Money Reimagined: Hey Elon, Bitcoin Can Green the Grid</h2>
          <div className="flex items-center text-sm text-green-100">
            <p className="font-semibold">Michael J.Casey &bull;</p>
            <p className="ml-1">May 21, 2021</p>
          </div>
          <p className="text-green-100 text-sm">
            Decentralization of the energy system and the money system can go
            hand in hand, says CoinDesk's chief content officer.
          </p>
        </div>
      </div>
    );
}

export default LargeImageItem
