import React, { Component } from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';
import { BtnChangeSlide } from '../index';

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
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        return 1;
    }
  };

  render() {
    const { numberOfSlide, slideActive, viewWidth } = this.state;
    return (
      <div>
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
