import React, { PropTypes } from 'react';
const Icon = (props) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };
  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={`0 0 ${props.viewBox} ${props.viewBox}`}
    >
      <path
        style={styles.path}
        d={props.name}
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  viewBox: 512,
};

export default Icon;
