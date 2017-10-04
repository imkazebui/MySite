import React from 'react';
import Icon from 'components/Icon';
import { SectionHeader, Line, H2,
  Card,
  Front,
  Back,
  CardContainer,
  SectionBody,
  Section,
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
            <CardContainer>
              <Card>
                <Front>
                  <Icon name={item.icon} viewBox={item.viewBox} size="50" color="#425CBB" />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </Front>
              </Card>
            </CardContainer>
          ))}
        </SectionBody>
      </Section>
    );
  }
}

export default GreatePosibilities;
