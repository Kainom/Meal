import React from "react";
import classe from "./loading.module.css";

export const Loading = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen">
        <h1 className={`${classe.loading} text-7xl mb-20`}>Loading 
            <span className={`animate-spin`}>
              &#8230;
            </span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Loading;
