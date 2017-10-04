import React from 'react';
import { SectionHeader, Line, H2,
  SectionBody,
  Section,
  SectionDescription,
} from '../index';

import text from './text';

export class Testimonials extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section >
        <SectionHeader>
          <H2>{text.title}</H2>
          <Line />
          <SectionDescription>{text.description}</SectionDescription>
        </SectionHeader>
        <SectionBody wrap >
          {/* { text.listItems.map((item) => (
            <GreatePossibilitiesItem>
              <ItemLeft>
                <Icon name={item.icon} viewBox={item.viewBox} size="50" color="#425CBB" />
              </ItemLeft>
              <div>
                <GPItemTitle>{item.title}</GPItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </div>
            </GreatePossibilitiesItem>
          ))} */}
        </SectionBody>
      </Section>
    );
  }
}

export default Testimonials;
