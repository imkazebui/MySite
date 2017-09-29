import React from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';
import { ViewSlider } from '../index';

const slider1 = require('./slider1.jpg');

export class Slider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSlider background={slider1}>
        <div>
          <Icon name={ICONS.FORWARD} color="white" />
        </div>
        <div>
          <Icon name={ICONS.ARROW_BACK} color="white" />
        </div>
      </ViewSlider>
    );
  }
}

export default Slider;
