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
      videoImg: {
        width: 300,
        height: 300,
      },
    };
  }

  componentDidMount() {
    this.updateViewWidth();
    window.addEventListener('resize', this.updateViewWidth);
  }

  componentWillUnmount() {
    window.removeEventListner('resize', this.updateViewWidth);
  }

  onLoadVideoImg = () => {
    this.updateViewWidth();
  };

  setActive = (i) => {
    this.setState({ slideActive: i });
  };

  updateViewWidth = () => {
    const el = document.getElementById('testimonials-view');
    const { width } = el.getBoundingClientRect();
    const e = document.getElementById('test');
    const { height } = e.getBoundingClientRect();
    const elImg = document.getElementById('img-video');
    this.setState({
      viewWidth: width,
      slideActive: 0,
      slideHeight: height,
      videoImg: {
        width: elImg.width,
        height: elImg.height,
      },
    });
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
    const { avatar, name, position, review, imgVideo } = text.listItems[i];
    const { width, height } = this.state.videoImg;
    switch (i) {
      case 0:
        return (
          <View row id="testimonials-slide">
            <View className="slide-content-left" id="test">
              <div className="quote">{review}</div>
              <View row className="testimonials-info">
                <View>
                  <img alt={name} src={avatar} className="avatar" />
                </View>
                <View className="testimonials-name">
                  <p>{name}</p>
                  <p>{position}</p>
                </View>
              </View>
            </View>
            <View className="slide-content-right">
              <View className="player-view" style={{ width, height }}>
                <View className="circle">
                  <View className="play">
                    <Icon name={ICONS.PLAY} color="#425CBB" size="16" />
                  </View>
                </View>
              </View>
              <img
                alt={name}
                src={imgVideo}
                id="img-video"
                onLoad={this.onLoadVideoImg}
              />
            </View>
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
              <div onClick={this.nextSlide} className="btn-change-slide right">
                <Icon name={ICONS.FORWARD} size="20" />
              </div>

              <div onClick={this.preSlide} className="btn-change-slide">
                <Icon name={ICONS.ARROW_BACK} size="20" />
              </div>
            </nav>
          </div>
        </SectionBody>
      </Section>
    );
  }
}
