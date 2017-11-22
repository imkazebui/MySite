import React, { Component } from 'react';
import Icon from 'components/Icon';
import View from 'components/View';
import { ICONS } from 'components/Icon/listIcon';
import {
  SectionHeader,
  Line,
  H2,
  SectionBody,
  Section,
  SectionDescription,
  BtnChangeSlide,
} from '../index';

import text from './text';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlide: [1, 2, 3],
      slideActive: 0,
      viewWidth: window.innerWidth,
      slideHeight: 300,
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
    const el = document.getElementById('testimonials-view');
    const { width } = el.getBoundingClientRect();
    const e = document.getElementById('testimonials-slide');
    const { height } = e.getBoundingClientRect();
    this.setState({ viewWidth: width, slideActive: 0, slideHeight: height });
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
    const { avatar, name, position, review, video } = text.listItems[i];
    switch (i) {
      case 0:
        return (
          <View row id="testimonials-slide">
            <View className="slide-content-left">
              <p>{review}</p>
              <p>{name}</p>
              <p>{position}</p>
              <img alt={name} src={avatar} />
            </View>
            <View className="slide-content-right">Con lon</View>
          </View>
        );
      case 1:
        return 2;
      case 2:
        return 3;
      default:
        return 1;
    }
  };

  render() {
    const { numberOfSlide, slideActive, viewWidth } = this.state;
    return (
      <Section>
        <SectionHeader>
          <H2>{text.title}</H2>
          <Line />
          <SectionDescription>{text.description}</SectionDescription>
        </SectionHeader>
        <SectionBody wrap className="testmionials">
          <div
            id="testimonials-view"
            className="slider"
            style={{
              width: '100%',
              height: `${this.state.slideHeight}px`,
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

            <nav>
              <BtnChangeSlide right onClick={this.nextSlide}>
                <Icon name={ICONS.FORWARD} color="white" />
              </BtnChangeSlide>
              <BtnChangeSlide left onClick={this.preSlide}>
                <Icon name={ICONS.ARROW_BACK} color="white" />
              </BtnChangeSlide>
            </nav>
          </div>
        </SectionBody>
      </Section>
    );
  }
}
