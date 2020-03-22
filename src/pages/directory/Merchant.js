import React from "react";
import CommonFields from "./CommonFields";

export default function Merchant(props) {
  const { Business_Name, Merchant_Ships, Merchant_Budget, Notes } = props;

  return (
    <div className="directory-item">
      <h3 className="title has-text-primary is-size-4">
        <i className="fa fa-building" /> {Business_Name}
      </h3>
      <CommonFields {...props} />
      <div>
        Currently Ships:{" "}
        {Merchant_Ships ? <i className="fas fa-check green" /> : "-"}
      </div>
      {Merchant_Budget && (
        <div>
          Budget: <strong>{Merchant_Budget}</strong>
        </div>
      )}
      {Notes && <div className="notes">Notes: {Notes}</div>}
    </div>
  );
}
