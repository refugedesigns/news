import FooterItems from "./FooterItems"
import Card from '../../ui/Card'
import FootNote from '../footer/FooterNote'
import { Fragment } from "react";

const Footer = () => {
    return (
      <Fragment>
        <Card>
          <div className="lg:flex lg:justify-evenly py-8">
              <FooterItems title="Recent" />
              <FooterItems title="Most Popular" />
              <FooterItems title="Events" />
            </div>
        </Card>
        <FootNote />
      </Fragment>
    );
}

export default Footer
