import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1 className="title"> Cocktails</h1>
      <div className="cocktails">
        <Cocktails />
      </div>
    </Fragment>
  );
};
export default Home;
