import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

function Button(props) {
  return (
    <StyledButton onClick={props.onClick}>
      {Children.toArray(props.children)}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
