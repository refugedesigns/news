import { Fragment } from "react"

import MainNavigation from '../components/Layout/mainNavigation'
import HeadLineSection from '../components/home-page/topSection'
import MiddleSection from '../components/home-page/middleSection'

const HomePage = () => {
    return (
      <Fragment>
        <main className="flex justify-center">
          <div className="max-w-screen-lg">
            <HeadLineSection />
            <MiddleSection />
            </div>
        </main>
      </Fragment>
    );
}

export default HomePage