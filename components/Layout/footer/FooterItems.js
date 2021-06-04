import { Fragment } from "react"
import FooterItem from "./FooterItem"

const FooterItems = (props) => {
    return (
      <Fragment>
        <div className="mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center">
          <h3 className="text-3xl w-min border-b-4 border-[#FF6A3D] text-gray-100 pt-8 mb-4 font-semibold whitespace-nowrap">
            {props.title}
          </h3>
          <FooterItem />
          <FooterItem />
          <FooterItem />
          <FooterItem />
          <FooterItem />
          <FooterItem />
        </div>
      </Fragment>
    );
}

export default FooterItems
