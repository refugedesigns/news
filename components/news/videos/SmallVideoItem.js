import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/outline'

const SmallVideoItem = () => {
    return (
      <div className="flex justify-center ">
        <div className="w-44 border-b py-4 lg:py-0 lg:border-none bg-[#9DAAF2]">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              width={180}
              height={100}
            />
            <PlayIcon className="h-8 absolute bottom-0 text-white bg-[#FF6A3D] px-1" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-[#1A2238]">
              Iran Intelligence Agency to Trace Illegal Crypto Mining Activities
            </h1>
            <p className="text-sm font-semibold text-[#1A2238]">04m 22s</p>
          </div>
        </div>
      </div>
    );
}

export default SmallVideoItem
