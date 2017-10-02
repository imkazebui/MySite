import React from 'react';
import Icon from 'components/Icon';
import Button from 'components/MyButton';
import { ICONS } from 'components/Icon/listIcon';
import { ViewSlider, BtnSlide, ViewSlideDescribe, SlideTitle } from '../index';

const slider1 = require('./slider1.jpg');

export class Slider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSlider background={slider1}>
        <BtnSlide right>
          <Icon name={ICONS.FORWARD} color="white" />
        </BtnSlide>
        <BtnSlide left className="hvr-radial-out">
          <Icon name={ICONS.ARROW_BACK} color="white" />
        </BtnSlide>
        <ViewSlideDescribe>
          <SlideTitle>Dream Home Meet Reality</SlideTitle>
          <p>We are a global branding agency helping companies to communicate</p>
          <Button>
            <p>Learn More</p>
          </Button>
        </ViewSlideDescribe>
      </ViewSlider>
    );
  }
}

export default Slider;
