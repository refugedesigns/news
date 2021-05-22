import Image from "next/image";

const imageTopNewsItem = () => {
  return (
    <div className="flex justify-between flex-row-reverse m-4 pb-2 border-b border-gray-400 sm:w-full md:flex md:flex-col md:justify-evenly md:border-none md:w-32 md:pb-0 lg:flex lg:flex-col lg:-mt-24 lg:-mb-28 lg:gap-0">
      <div className="">
        <Image
          src="https://images.unsplash.com/photo-1613059312885-8a758073461b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          width={150}
          height={100}
        />
      </div>
      <div className="mr-2 lg:-mt-36">
        <p className="text-gray-900 border-black w-min border-b border-dotted sm:font-semibold md:font-normal">
          Local
        </p>
        {/* <hr className="w-10 border-t-dotted border-black" /> */}
        <h3 className=" md:text-sm mt-4 sm:mt-4 sm:font-semibold md:font-normal">
          'Wondrous': Ranger stumbles ...
        </h3>
      </div>
    </div>
  );
};

export default imageTopNewsItem;
