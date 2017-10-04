import React from 'react';
import { SectionHeader, Line, H2,
  Card,
  Front,
  Back,
  CardContainer,
  SectionBody,
  ItemTitle,
  ItemDescription,
} from '../index';

import text from './text';

export class ChooseUs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section>
        <SectionHeader>
          <H2>{text.title}</H2>
          <Line />
          <p>{text.description}</p>
        </SectionHeader>
        <SectionBody>
          { text.listItems.map((item) => (
            <CardContainer>
              <Card>
                <Front>
                  <img src={item.image} alt="gg" />
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
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

export default ChooseUs;
