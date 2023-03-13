import React from "react";
import PropTypes from "prop-types";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Arrow = ({ direction, action }) => {
  const ActionMap = {
    left: { icon: <MdNavigateBefore size="60" onClick={action} /> },
    right: { icon: <MdNavigateNext size="60" onClick={action} /> },
  };

  return (
    <div
      className="direction"
      style={{ paddingTop: "50px", cursor: "pointer" }}
    >
      {ActionMap[direction].icon}
    </div>
  );
};

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
};

export default Arrow;
