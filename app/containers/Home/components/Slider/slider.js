import React, { Component } from 'react';
import Icon from 'components/Icon';
import Button from 'components/MyButton';
import { ICONS } from 'components/Icon/listIcon';
import {
  BtnChangeSlide,
  ViewSlider,
  ViewSlideDescribe,
  SlideTitle,
} from '../index';

const slider1 = require('./slider1.jpg');
const slider2 = require('./slider2.jpg');
const slider3 = require('./slider3.jpg');

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlide: [1, 2, 3],
      slideActive: 0,
      viewWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    this.updateViewWidth();
    window.addEventListener('resize', this.updateViewWidth);
  }

  componentWillUnmount() {
    window.removeEventListner('resize', this.updateViewWidth);
  }

  setActive = (i) => {
    this.setState({ slideActive: i });
  };

  updateViewWidth = () => {
    this.setState({ viewWidth: window.innerWidth, slideActive: 0 });
  };

  preSlide = () => {
    const { slideActive, numberOfSlide } = this.state;
    const lastSlide = numberOfSlide.length - 1;

    if (slideActive > 0) {
      return this.setState({ slideActive: slideActive - 1 });
    }
    return this.setState({ slideActive: lastSlide });
  };

  nextSlide = () => {
    const { slideActive, numberOfSlide } = this.state;
    const lastSlide = numberOfSlide.length - 1;

    if (slideActive < lastSlide) {
      return this.setState({ slideActive: slideActive + 1 });
    }
    return this.setState({ slideActive: 0 });
  };

  renderSlide = (i) => {
    switch (i) {
      case 0:
        return (
          <ViewSlider background={slider1}>
            <ViewSlideDescribe className="slide1">
              <SlideTitle className="title-animation-1">
                {"Let's get started"}
              </SlideTitle>
              <p className="describe-animation-1 slide-describe">
                We are a global branding agency helping companies to communicate
                <br />
                through vision and imagination.
              </p>
              <div className="btn-animation-1 slide-btn">
                <Button>Learn More</Button>
              </div>
            </ViewSlideDescribe>
          </ViewSlider>
        );
      case 1:
        return (
          <ViewSlider background={slider2}>
            <ViewSlideDescribe className="slide1">
              <SlideTitle className="title-animation-2">
                Making Dream Possible
              </SlideTitle>
              <p className="describe-animation-2 slide-describe">
                We are a global branding agency helping companies to communicate
                <br />
                through vision and imagination.
              </p>
              <div className="btn-animation-2 slide-btn">
                <Button>Learn More</Button>
              </div>
            </ViewSlideDescribe>
          </ViewSlider>
        );
      case 2:
        return (
          <ViewSlider background={slider3}>
            <ViewSlideDescribe className="slide3">
              <SlideTitle className="title-animation-3">
                Dream Home Meet Reality
              </SlideTitle>
              <p className="describe-animation-1 slide-describe">
                We are a global branding agency helping companies to communicate
                <br />
                through vision and imagination.
              </p>
              <div className="btn-animation-1 slide-btn">
                <Button>Learn More</Button>
              </div>
            </ViewSlideDescribe>
          </ViewSlider>
        );
      default:
        return 0;
    }
  };

  render() {
    const { numberOfSlide, slideActive, viewWidth } = this.state;
    return (
      <div className="intro">
        <div
          className="slider"
          style={{
            width: viewWidth,
          }}
        >
          <div
            className="slider-inner"
            style={{
              transform: `translateX(-${slideActive *
                viewWidth}px) translateZ(0)`,
              width: viewWidth * numberOfSlide.length,
            }}
          >
            {numberOfSlide.map((item, i) => (
              <div
                key={item[i]}
                style={{
                  width: viewWidth,
                  left: viewWidth * i,
                }}
                className={slideActive === i ? 'slide active' : 'slide'}
              >
                {this.renderSlide(i)}
              </div>
            ))}
          </div>

          <nav className="slider-nav">
            {numberOfSlide.map((item, i) => (
              <div
                key={item[i]}
                className={slideActive === i ? 'active' : null}
                onClick={() => this.setActive(i)}
              />
            ))}
          </nav>

          <nav>
            <BtnChangeSlide right onClick={this.nextSlide}>
              <Icon name={ICONS.FORWARD} color="white" />
            </BtnChangeSlide>
            <BtnChangeSlide left onClick={this.preSlide}>
              <Icon name={ICONS.ARROW_BACK} color="white" />
            </BtnChangeSlide>
          </nav>
        </div>
      </div>
    );
  }
}
