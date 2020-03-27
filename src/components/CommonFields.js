import React from "react";

export default function CommonFields(props) {
  const { Email, Phone, Location, Created_At, Contact_Name } = props;
  const dateFormatted =
    Created_At && new Date(Created_At).toLocaleDateString("en-US");
  return (
	<div>
    <>
      <div>
        {dateFormatted && (
          <>
            <i className="fa fa-clock" /> {dateFormatted}
          </>
        )}{" "}
        {Location && (
          <>
            <i className="fa fa-map-marker" /> {Location}
          </>
        )}
      </div>
      {Contact_Name && (
        <div>
          <i className="fas fa-user" /> Contact: {Contact_Name}
        </div>
      )}

      <div>
        <i className="fa fa-at" /> <a href={"mailto:" + Email}>{Email}</a>
      </div>

      {Phone && (
        <div>
          <i className="fa fa-phone" /> <a href={"tel:" + Phone}>{Phone}</a>
        </div>
      )}
    </>
	</div>
  );
}
