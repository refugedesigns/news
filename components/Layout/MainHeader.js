import { Fragment } from 'react'
import Logo from './Logo'
import NavigationItems from './NavigationItems'
import Footer from '../Layout/footer/Footer'
import Sticky from 'react-sticky-el'


const MainHeader = (props) => {
    return (
      <Fragment>
        <header>
          <Logo />
          <Sticky stickyClassName={"z-50"}>
          <NavigationItems />
          </Sticky>
        </header>
        <main className="z-30">{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </Fragment>
    );
}

export default MainHeader
