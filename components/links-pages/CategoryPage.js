import { Fragment } from "react";
import MediumImage from "../../components/news/mediumImage";
import RightImageItem from "../../components/news/RightImageItem";
import Wrapper from "../../components/ui/Wrapper";

const CategoryPage = (props) => {
  return (
    <Fragment>
      <div className="mx-auto flex justify-center">
        <div>
          <div className="lg:flex">
            <MediumImage />
            <MediumImage />
          </div>
          <div className="lg:flex">
            <MediumImage />
            <MediumImage />
          </div>
        </div>
      </div>
      <Wrapper smallTitle={props.smallTitle} largeTitle={props.largeTitle}>
        <RightImageItem />
        <RightImageItem />
        <RightImageItem />
        <RightImageItem />
        <RightImageItem />
      </Wrapper>
    </Fragment>
  );
};

export default CategoryPage;
