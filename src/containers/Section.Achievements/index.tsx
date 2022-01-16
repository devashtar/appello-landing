import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'

export const SectionAchievements: React.FC<{}> = () => {
  return (
    <Styled.Section>
      <Container>
        <Styled.ContentBlock>
          <Styled.Title>We're industry approved</Styled.Title>
          <Styled.SubTitle>
            Appello is one of Australia’s most highly rated software companies
            by recognisable directories like Clutch, GoodFirms, AppFutura and
            many more.
          </Styled.SubTitle>
          <Styled.WrapperAwards>
            <img
              src={process.env.PUBLIC_URL + '/images/achievements/award1.png'}
              alt='award'
            />
            <img
              src={process.env.PUBLIC_URL + '/images/achievements/award2.png'}
              alt='award'
            />
            <img
              src={process.env.PUBLIC_URL + '/images/achievements/award3.png'}
              alt='award'
            />
            <img
              src={process.env.PUBLIC_URL + '/images/achievements/award4.png'}
              alt='award'
            />
          </Styled.WrapperAwards>
        </Styled.ContentBlock>
      </Container>
    </Styled.Section>
  )
}
