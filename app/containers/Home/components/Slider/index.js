import React from 'react';
import Icon from 'components/Icon';
import Button from 'components/MyButton';
import { ICONS } from 'components/Icon/listIcon';
import { ViewSlider, BtnChangeSlide, ViewSlideDescribe,
  SlideTitle, SlideDescribe, SlideBtn,
} from '../index';

const slider1 = require('./slider1.jpg');

export class Slider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSlider background={slider1}>
        <BtnChangeSlide right>
          <Icon name={ICONS.FORWARD} color="white" />
        </BtnChangeSlide>
        <BtnChangeSlide left>
          <Icon name={ICONS.ARROW_BACK} color="white" />
        </BtnChangeSlide>
        <ViewSlideDescribe>
          <SlideTitle>Dream Home Meet Reality</SlideTitle>
          <SlideDescribe>We are a global branding agency helping companies to communicate</SlideDescribe>
          <SlideBtn>
            <Button>
              Learn More
            </Button>
          </SlideBtn>
        </ViewSlideDescribe>
      </ViewSlider>
    );
  }
}

export default Slider;
