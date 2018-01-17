import React, { Component } from 'react';
// import Icon from 'components/Icon';
// import { ICONS } from 'components/Icon/listIcon';

import { Background, ViewText, ViewImg, Title, Line, Text } from './styles';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Background>
        <ViewText>
          <Title />
          <Line />
          <Text />
        </ViewText>
        <ViewImg />
      </Background>
    );
  }
}
