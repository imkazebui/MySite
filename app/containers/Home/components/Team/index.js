import React, { Component } from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';

import { SectionHeader, Line, H2, Section, SectionDescription } from '../index';

import {
  Container,
  ContainerBody,
  Image,
  SectionBody,
  Name,
  Position,
  OverLay,
  Social,
} from './styles';

import text from './text';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlide: [1, 2, 3],
      slideActive: 0,
      viewWidth: 300,
      slideHeight: 300,
    };
  }

  onLoadImg = () => {
    const el = document.getElementById('teamImg-1');
    const { height } = el.getBoundingClientRect();
    this.setState({ slideHeight: height });
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
    const { avatar, name, position } = text.listItems[i];
    const { viewWidth } = this.state;
    return (
      <Container width={viewWidth} id={`teamImg-${i}`}>
        <ContainerBody>
          <Image
            alt={name}
            src={avatar}
            onLoad={i === 0 ? this.onLoadImg : false}
          />
          <OverLay>
            <Social>
              <a>
                <Icon
                  name={ICONS.FACEBOOK}
                  viewBox="32"
                  size="14"
                  color="white"
                />
              </a>
              <a>
                <Icon
                  name={ICONS.GOOGLE}
                  viewBox="32"
                  size="14"
                  color="white"
                />
              </a>
              <a>
                <Icon
                  name={ICONS.PINTEREST}
                  viewBox="32"
                  size="14"
                  color="white"
                />
              </a>
              <a>
                <Icon
                  name={ICONS.TWITTER}
                  viewBox="32"
                  size="14"
                  color="white"
                />
              </a>
            </Social>
          </OverLay>
        </ContainerBody>
        <div>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </div>
      </Container>
    );
  };

  render() {
    const { slideActive, viewWidth } = this.state;
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
                width: viewWidth * text.listItems.length,
              }}
            >
              {text.listItems.map((item, i) => (
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
