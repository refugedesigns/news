import { Fragment } from 'react'
import Logo from './Logo'
import NavigationItems from './NavigationItems'


const MainHeader = (props) => {
    return (
      <Fragment>
        <header>
          <Logo />
          <NavigationItems />
        </header>
        <main>{props.children}</main>
      </Fragment>
    );
}

export default MainHeader
