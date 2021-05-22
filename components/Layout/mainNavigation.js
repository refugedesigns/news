import Link from 'next/link'
import { Fragment } from 'react';

import Logo from '../Layout/logo'

const mainNavigation = (props) => {
    return (
      <Fragment>
        <header>
          <Logo />
          <nav className="hidden md:block md:border-b sm:border-t sm:border-gray-400">
            <ul className="flex justify-center items-center p-4 w-full">
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">
                  <a>BTC</a>
                </Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Stablecoins</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Mining</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Technical Analysis</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Institutions</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Futures</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Regulations</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Taxes</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">NFT</Link>
              </li>
              <li className="pl-4 font-bold text-sm text-yellow-500">
                <Link href="#">Popular Events</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {props.children}
        </main>
      </Fragment>
    );
}

export default mainNavigation
