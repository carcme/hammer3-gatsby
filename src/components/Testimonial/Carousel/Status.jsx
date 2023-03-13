import React from "react";
import PropTypes from "prop-types";
import { MdFiberManualRecord } from "react-icons/md";

const Status = ({ active, data }) => {
  return (
    <div>
      {data.map((x, index) => (
        <MdFiberManualRecord
          style={{
            fontSize: 12,
            color: index === active ? "var(--blood-red)" : "",
          }}
        />
      ))}
    </div>
  );
};

Status.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
};

export default Status;
