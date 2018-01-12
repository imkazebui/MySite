import React, { Component } from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';

import { Background, Container, Numbers, Texts } from './styles';

import data from './text';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      height: null,
      isCounter: false,
      text: data,
    };
  }

  componentDidMount() {
    const el = document.getElementById('statistics').getBoundingClientRect();
    console.log('el', el);
    this.setState({ top: el.top, height: el.height });

    document.addEventListener('scroll', this.scrollEvent);
  }

  scrollEvent = (e) => {
    const { top, height, isCounter, text } = this.state;
    const currentTop = window.scrollY;

    if (!isCounter) {
      console.log('counter', currentTop, top, height);
      if (currentTop >= top - 500 && currentTop <= top + height) {
        // lam cai tro gi do
        this.setState({ isCounter: true });
      }
    } else {
      document.removeEventListener('scroll', this.scrollEvent);
    }
  };

  counter = (index, i) => {
    const { text } = this.state;

    console.log('dau phong', index, i);

    text[index].statistics = i;
    this.setState({ text });
  };

  render() {
    console.log('state', this.state.text);
    return (
      <Background id="statistics">
        {this.state.text.map((item) => (
          <Container key={item.name}>
            <Icon
              name={ICONS[item.icon]}
              viewBox="32"
              size="40"
              color="white"
            />
            <Numbers>{item.statistics}</Numbers>
            <Texts>{item.name}</Texts>
          </Container>
        ))}
      </Background>
    );
  }
}
