import { forwardRef } from "react";
import PropTypes from 'prop-types';

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      {/* Page Header */}
      <div className="h-full">{props.children}</div>
      <p className="text-xs text-end text-black pb-4">
        Page number: {props.number}
      </p>
    </div>
  );
});

// Assigning a displayName to the component
Page.displayName = 'Page';

// Prop types validation for the Page component
Page.propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired,
};

export default Page;