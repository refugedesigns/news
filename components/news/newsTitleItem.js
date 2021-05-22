import { Fragment } from "react";

import NewsSectionHeader from '../news/newsSectionHeader'

const newsTitleItem = () => {
    return (
      <Fragment>
        <div className="flex justify-center m-4 py-4 border-b border-gray-400 ">
          <div className="flex items-start pb-2">
            <div className="text-4xl">&bull;</div>
            <h1 className="ml-2 font-bold text-sm">
              An interview with Emily Wilder, recent Stanford grad fired from AP
              job over criticisms of Isreal
            </h1>
          </div>
        </div>
      </Fragment>
    );
}

export default newsTitleItem
