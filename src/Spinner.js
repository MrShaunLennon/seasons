import { POINT_CONVERSION_COMPRESSED } from 'constants';
import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

export default Spinner;
