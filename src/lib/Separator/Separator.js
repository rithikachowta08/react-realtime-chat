import './Separator.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Separator = props => (
  <div className="separator">
    <hr className="hr-text" data-content={props.displayText} />
  </div>
);

Separator.propTypes = {
  displayText: PropTypes.string
};

Separator.defaultProps = {
  displayText: ''
};

export default Separator;
