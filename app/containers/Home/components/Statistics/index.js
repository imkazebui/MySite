import React, { Component } from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';

import { Background, Container, Numbers, Texts } from './styles';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      height: null,
      isCounter: false,
      text: [
        {
          name: 'AWARDS',
          statistics: 0,
          max: 12345,
          icon: 'MEDAL',
        },
        {
          name: 'SUCCESSFUL PROJECT',
          statistics: 0,
          max: 12345,
          icon: 'DOCUMENT_CODE',
        },
        {
          name: 'OUR CUSTOMERS',
          statistics: 0,
          max: 12345,
          icon: 'USER',
        },
        {
          name: 'NEW UPDATES',
          statistics: 0,
          max: 12345,
          icon: 'STACK',
        },
      ],
    };
  }

  componentDidMount() {
    this.getBounding();
    document.addEventListener('scroll', this.scrollEvent);
  }

  getBounding = () => {
    const el = document.getElementById('statistics').getBoundingClientRect();
    this.setState({ top: el.top, height: el.height });
  };

  scrollEvent = () => {
    const { top, height, isCounter, text } = this.state;
    const currentTop = window.scrollY;

    if (!isCounter) {
      if (currentTop >= top - 500 && currentTop <= top + height) {
        // lam cai tro gi do
        text.map((item, index) => {
          this.counter(index, 0);
        });
        return this.setState({ isCounter: true });
      }
    } else {
      return document.removeEventListener('scroll', this.scrollEvent);
    }
  };

  counter = (index, i) => {
    const { text } = this.state;
    const { max } = text[index];

    if (i <= max) {
      setTimeout(() => {
        text[index].statistics = i;
        this.setState({ text });
        this.counter(index, i + max % 1000);
      }, 100);
    } else {
      text[index].statistics = max;
      this.setState({ text });
    }
  };

  render() {
    return (
      <Background id="statistics">
        {this.state.text.map(item => (
          <Container key={item.name}>
            <Icon name={ICONS[item.icon]} viewBox="32" size="40" color="white" />
            <Numbers>{item.statistics}</Numbers>
            <Texts>{item.name}</Texts>
          </Container>
        ))}
      </Background>
    );
  }
}
