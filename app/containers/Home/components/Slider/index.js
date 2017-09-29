import React from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';
import { ViewSlider, BtnSlide } from '../index';

const slider1 = require('./slider1.jpg');

export class Slider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSlider background={slider1}>
        <BtnSlide right>
          <Icon name={ICONS.FORWARD} color="white" />
        </BtnSlide>
        <BtnSlide left>
          <Icon name={ICONS.ARROW_BACK} color="white" />
        </BtnSlide>
      </ViewSlider>
    );
  }
}

export default Slider;
