import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => <div className="Container">{children}</div>;

export default Container;

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
