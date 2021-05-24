import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";

const LargeVideoItem = () => {
  return (
    <div className="pt-8">
      <div>
        <div className="relative">
          <div className="">
            <Image
              src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              width={500}
              height={350}
              layout="responsive"
            />
          </div>
          <PlayIcon className="h-16 absolute bottom-0 text-white bg-green-500 px-4" />
        </div>
      </div>
      <div className="bg-green-700 p-4">
        <h1 className="font-semibold text-md text-green-100">
          Elon Musk Says He's Working With Dogecoin Devs to Improve Network
        </h1>
        <p className="py-4 font-semibold text-green-100">May 14, 2021</p>
        <p className="text-sm font-semibold text-green-100">
          The price of dogecoin surged after Elon Musk tweeted he was working
          with the joke coin’s developers to improve the network’s transaction
          efficiency. This tweet follows on the heels of Musk’s announcement
          yesterday that Tesla would stop accepting bitcoin as a form of
          payment. Is this a sign that dogecoin might be on Tesla’s radar for
          crypto payment options? “The Hash” panel debates. Plus, DOGE is coming
          to Coinbase.
        </p>
      </div>
    </div>
  );
};

export default LargeVideoItem;
