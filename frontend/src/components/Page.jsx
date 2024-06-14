import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <h1>Page Header</h1>
      <div className="h-full">
        <p>{props.children}</p>
      </div>
      <p className="text-xs text-end text-black pb-4">
        Page number: {props.number}
      </p>
    </div>
  );
});

export default Page;
