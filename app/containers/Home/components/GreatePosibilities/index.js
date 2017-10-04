import React from 'react';
import Icon from 'components/Icon';
import { SectionHeader, Line, H2,
  SectionBody,
  Section,
  GreatePossibilitiesItem,
  ItemDescription,
  ItemLeft,
  GPItemTitle,
} from '../index';

import text from './text';

export class GreatePosibilities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section color="#F7F8FC" >
        <SectionHeader>
          <H2>{text.title}</H2>
          <Line />
        </SectionHeader>
        <SectionBody wrap >
          { text.listItems.map((item) => (
            <GreatePossibilitiesItem>
              <ItemLeft>
                <Icon name={item.icon} viewBox={item.viewBox} size="50" color="#425CBB" />
              </ItemLeft>
              <div>
                <GPItemTitle>{item.title}</GPItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </div>
            </GreatePossibilitiesItem>
          ))}
        </SectionBody>
      </Section>
    );
  }
}

export default GreatePosibilities;
