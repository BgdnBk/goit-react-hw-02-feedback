import React from 'react';
import PropTypes from 'prop-types';

Nottification.propTypes = {
   message: PropTypes.string,
};

export default function Nottification({message}) {
  return (
    <div>
      <div>{<h2>{message}</h2>}</div>;      
    </div>
  );
}

 