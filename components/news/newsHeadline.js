import Image from 'next/image'

import MenuAlt from '../ui/menuAlt'


const newsHeadline = () => {
    return (
      <div className="m-4">
          <div className="relative">
            <div className="">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
                height={500}
                width={800}
                layout="responsive"
              />
              <div className="absolute bg-red-500 -bottom-3 left-2 px-4 py-1">
                <p>Local</p>
              </div>
            </div>
            </div>
          <div className="text-3xl mt-2 font-bold">
            <h1>The (actual) list of weirdest things in San Francisco</h1>
          </div>
          <div className="mt-2 text-gray-900">
            <p>The most curious of San Francisco aren't easy to find</p>
            <div className="flex mt-2">
              <div className="fill content text-gray-700">
                <MenuAlt />
              </div>
              <p className="ml-2 text-gray-700 font-semibold">
                By Andrews Chamings, Katie Dowd
              </p>
            </div>
          </div>
        </div>
    );
}

export default newsHeadline
