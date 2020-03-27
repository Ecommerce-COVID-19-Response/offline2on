import React from 'react';
import CommonFields from './CommonFields';

export default function Agency(props) {
  const { Business_Name, Agency_Expertise, Agency_Platforms, Notes } = props;
  const renderArray = arr => arr.join(', ');

  return (
    <div className="directory-item">
      <h3 className="title has-text-primary is-size-4">{Business_Name}</h3>
      <CommonFields {...props} />
      {Agency_Expertise && (
        <div className="expertise">
          <strong>Expertise:</strong> {renderArray(Agency_Expertise)}
        </div>
      )}
      {Agency_Platforms && (
        <div className="expertise">
          <strong>Platforms:</strong> {renderArray(Agency_Platforms)}
        </div>
      )}
      {Notes && <div className="notes">Notes: {Notes}</div>}
    </div>
  );
}
