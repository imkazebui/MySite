import React from 'react';
import Icon from 'components/Icon';
import { ICONS } from 'components/Icon/listIcon';

import { Background, Container, Numbers, Texts } from './styles';

import text from './text';

export const Statistics = () => (
  <Background>
    {text.listItems.map((item) => (
      <Container key={item.name}>
        <Icon name={ICONS[item.icon]} viewBox="32" size="40" color="white" />
        <Numbers>{item.statistics}</Numbers>
        <Texts>{item.name}</Texts>
      </Container>
    ))}
  </Background>
);
