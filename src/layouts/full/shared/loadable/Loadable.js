import React, { Suspense } from "react";
import PreloaderCustom from "../../../../components/shared/PreloaderCustom";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<PreloaderCustom fullPreloader={props} />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
