import { Fragment } from "react"
import NavigationItem from "./NavigationItem"


const NavigationItems = () => {
    return (
      <div className="flex justify-center lg:border-b border-green-800 py-9">
        <div className="last:pr-8 hidden lg:block lg:flex lg:items-center lg:mx-auto lg:overflow-x-scroll lg:scrollbar-hide lg:whitespace-nowrap lg:space-x-20">
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
        </div>
      </div>
    );
}

export default NavigationItems
