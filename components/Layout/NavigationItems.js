import NavigationItem from "./NavigationItem"
import { useRef } from 'react'


const NavigationItems = () => {
  const target = useRef(null);
 
  const listenScrollEvent = (event) => {
    const toLeft = event.deltaY < 0 && target.current.scrollLeft > 0;
    const toRight =
      event.deltaY > 0 &&
      target.current.scrollLeft <
        target.current.scrollWidth - target.current.clientWidth;
 
    if (toLeft || toRight) {
      event.preventDefault();
      event.stopPropagation();
 
      target.current.scrollLeft += event.deltaY;
    }
  };
    return (
      <nav className="flex justify-center lg:border-b border-gray-900 py-9 lg:bg-[#1A2238] z-50">
        <ul
          ref={target}
          onWheel={listenScrollEvent}
          className="hidden lg:block lg:flex lg:items-center lg:mx-auto lg:overflow-x-scroll lg:scrollbar-hide lg:whitespace-nowrap lg:space-x-20  lg:active:text-yellow-500 last:pr-8 z-50"
        >
          <NavigationItem href="/btc">BTC</NavigationItem>
          <NavigationItem href="/stablecoins">Stablecoins</NavigationItem>
          <NavigationItem href="/technical-analysis">
            Technical Analysis
          </NavigationItem>
          <NavigationItem href="/mining">Mining</NavigationItem>
          <NavigationItem href="/futures">Futures</NavigationItem>
          <NavigationItem href="/institutions">Institutions</NavigationItem>
          <NavigationItem href="/regulations">Regulations</NavigationItem>
          <NavigationItem href="/videos">Videos</NavigationItem>
          <NavigationItem href="/taxes">Taxes</NavigationItem>
          <NavigationItem href="/nft">NFT</NavigationItem>
        </ul>
      </nav>
    );
}

export default NavigationItems
