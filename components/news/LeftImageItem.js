import Image from 'next/image'

const LeftImageItem = () => {
    return (
      <div className="flex py-4 border-b border-green-800">
        <div>
        <Image src="https://images.unsplash.com/photo-1614562183670-b5c7d533ac1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width={400} height={250} />
        </div>
        <div className="ml-4">
          <h2 className="bg-green-500 w-max px-2 uppercase text-green-100 my-2">
            Podcasts
          </h2>
          <h3 className="text-sm font-semibold text-green-200">
            How Crypto Might Offer Haiti an Escape From Its Slavery Debt Legacy
          </h3>
        </div>
      </div>
    );
}

export default LeftImageItem
