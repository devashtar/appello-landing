import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { SubTitle } from '@components/SubTitle'

export const SectionResources: React.FC<{}> = () => {
  return (
    <Styled.Section>
      <Container>
        <Title>Resources</Title>
        <SubTitle>
          Sharing the latest and greatest from industry trends, insights,
          inspiration and successful Appello ventures.
        </SubTitle>
        <Styled.WrapperCards>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/resources/IMAGE.jpg'}
              alt='resource'
            />
            <Styled.ContentBlock>
              <Styled.Title>
                Meet our Chief Design Officer, Pharaoh Woghiren
              </Styled.Title>
              <Styled.SubTitle>
                Meet our Chief Design Officer, Pharaoh Woghiren.
              </Styled.SubTitle>
            </Styled.ContentBlock>
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/resources/IMAGE-1.jpg'}
              alt='resource'
            />
            <Styled.ContentBlock>
              <Styled.Title>
                Refreshing Mobile Applications: How to Know When a Mobile App
                Redesign is Necessary?
              </Styled.Title>
              <Styled.SubTitle>
                When to consider a mobile app redesign and signs to look out for
                to make sure your app captures user attention and loyalty.
              </Styled.SubTitle>
            </Styled.ContentBlock>
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/resources/IMAGE-2.jpg'}
              alt='resource'
            />
            <Styled.ContentBlock>
              <Styled.Title>
                Your Guide to Developing the Best People Management Software
                Solution
              </Styled.Title>
              <Styled.SubTitle>
                Custom employee management software or people management
                software solutions will be extremely beneficial to not only your
                HR department but the entire company.
              </Styled.SubTitle>
            </Styled.ContentBlock>
          </Styled.CardItem>
        </Styled.WrapperCards>
      </Container>
    </Styled.Section>
  )
}
