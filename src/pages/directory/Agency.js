import React from "react";
import CommonFields from "./CommonFields";

export default function Agency(props) {
  const { Business_Name, Agency_Expertise, Agency_Platforms, Notes } = props;
  return (
    <div className="directory-item">
      <h3 className="title has-text-primary is-size-4">
        <i className="fa fa-cart-arrow-down" /> {Business_Name}
      </h3>
      <CommonFields {...props} />
      {Agency_Expertise && (
        <div>
          <strong>Expertise:</strong> {Agency_Expertise}
        </div>
      )}
      {Agency_Platforms && (
        <div>
          <strong>Platforms:</strong> {Agency_Platforms}
        </div>
      )}
      {Notes && <div className="notes">Notes: {Notes}</div>}
    </div>
  );
}
