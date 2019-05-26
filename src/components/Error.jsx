import React from 'react';
import { Link } from '@reach/router';

const Error = props => {
  // console.log(props);
  const locationState = props.location.state;
  return (
    <div>
      <h2>Something went wrong.</h2>
      <p>
        {locationState && locationState.msg
          ? locationState.msg
          : `Sorry, we couldn't find what you're looking for !`}
      </p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Error;
