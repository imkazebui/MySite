import React from 'react';

import { ViewSlider } from '../index';

const slider1 = require('./slider1.jpg');

export class Slider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSlider background={slider1}>
        {/* <img src={slider1} alt='img' /> */}
      </ViewSlider>
    );
  }
}

export default Slider;
