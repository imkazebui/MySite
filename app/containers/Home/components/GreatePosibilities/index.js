import React from 'react';
import Icon from 'components/Icon';
import { SectionHeader, Line, H2,
  Card,
  Front,
  Back,
  CardContainer,
  SectionBody,
} from '../index';

import text from './text';

export class GreatePosibilities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section>
        <SectionHeader>
          <H2>{text.title}</H2>
          <Line />
        </SectionHeader>
        <SectionBody>
          { text.listItems.map((item) => (
            <CardContainer>
              <Card>
                <Front>
                  <Icon name={item.icon} viewBox={item.viewBox} size='50' color='#425CBB' />
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </Front>
                <Back>
                  <h3>{item.title}</h3>
                  <Line color="white" width="10%" />
                  <p>{item.description}</p>
                  <a>READ MORE</a>
                </Back>
              </Card>
            </CardContainer>
          ))}
        </SectionBody>
      </section>
    );
  }
}

export default GreatePosibilities;
